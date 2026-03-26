import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchProductByHandle } from "@/lib/shopify.tsx";
import { useCartStore } from "@/stores/cartStore";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Loader2, Minus, Plus, ShoppingCart } from "lucide-react";
import { toast } from "sonner";
import { CartDrawer } from "@/components/CartDrawer";

interface ProductNode {
  id: string;
  title: string;
  description: string;
  handle: string;
  priceRange: { minVariantPrice: { amount: string; currencyCode: string } };
  images: { edges: Array<{ node: { url: string; altText: string | null } }> };
  variants: {
    edges: Array<{
      node: {
        id: string;
        title: string;
        price: { amount: string; currencyCode: string };
        availableForSale: boolean;
        selectedOptions: Array<{ name: string; value: string }>;
      };
    }>;
  };
  options: Array<{ name: string; values: string[] }>;
}

const ProductDetail = () => {
  const { handle } = useParams<{ handle: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<ProductNode | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((s) => s.addItem);
  const isCartLoading = useCartStore((s) => s.isLoading);

  useEffect(() => {
    if (!handle) return;
    setLoading(true);
    fetchProductByHandle(handle)
      .then(setProduct)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [handle]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-4">
        <p className="text-muted-foreground font-body text-lg">Product not found</p>
        <Button variant="outline" onClick={() => navigate("/")}><ArrowLeft className="w-4 h-4 mr-2" /> Back to shop</Button>
      </div>
    );
  }

  const variant = product.variants.edges[selectedVariantIndex]?.node;
  const images = product.images.edges;

  const handleAdd = async () => {
    if (!variant) return;
    await addItem({
      product: { node: product },
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity,
      selectedOptions: variant.selectedOptions || [],
    });
    toast.success(`${product.title} added to cart`, { position: "top-center" });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="gradient-navy">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Button variant="ghost" onClick={() => navigate("/")} className="text-primary-foreground hover:bg-primary-foreground/10">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back
          </Button>
          <CartDrawer />
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Images */}
          <div>
            <div className="aspect-square bg-muted rounded-2xl overflow-hidden mb-4">
              {images[selectedImage] ? (
                <img src={images[selectedImage].node.url} alt={images[selectedImage].node.altText || product.title} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">No image</div>
              )}
            </div>
            {images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto">
                {images.map((img, i) => (
                  <button key={i} onClick={() => setSelectedImage(i)}
                    className={`w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-colors ${i === selectedImage ? 'border-secondary' : 'border-transparent'}`}>
                    <img src={img.node.url} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div>
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">{product.title}</h1>
            <p className="font-heading text-3xl font-bold text-foreground mb-6">
              {variant?.price.currencyCode} {parseFloat(variant?.price.amount || "0").toFixed(2)}
            </p>
            <p className="text-muted-foreground font-body mb-8 leading-relaxed">{product.description}</p>

            {/* Variant selector */}
            {product.options.length > 0 && product.options[0].name !== "Title" && (
              <div className="mb-6">
                {product.options.map((option) => (
                  <div key={option.name} className="mb-4">
                    <label className="font-body font-semibold text-foreground text-sm mb-2 block">{option.name}</label>
                    <div className="flex flex-wrap gap-2">
                      {product.variants.edges.map((v, i) => (
                        <button key={v.node.id} onClick={() => setSelectedVariantIndex(i)}
                          className={`px-4 py-2 rounded-lg border font-body text-sm transition-colors ${i === selectedVariantIndex
                            ? 'border-secondary bg-secondary/10 text-foreground'
                            : 'border-border text-muted-foreground hover:border-secondary/50'}`}>
                          {v.node.title}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Quantity */}
            <div className="mb-8">
              <label className="font-body font-semibold text-foreground text-sm mb-2 block">Quantity</label>
              <div className="flex items-center gap-3">
                <Button variant="outline" size="icon" onClick={() => setQuantity(Math.max(1, quantity - 1))}><Minus className="w-4 h-4" /></Button>
                <span className="w-12 text-center font-body font-semibold text-lg">{quantity}</span>
                <Button variant="outline" size="icon" onClick={() => setQuantity(quantity + 1)}><Plus className="w-4 h-4" /></Button>
              </div>
            </div>

            <Button onClick={handleAdd} disabled={isCartLoading || !variant?.availableForSale} size="lg"
              className="w-full gradient-gold text-accent-foreground hover:opacity-90 text-lg py-6">
              {isCartLoading ? <Loader2 className="w-5 h-5 animate-spin" /> :
                !variant?.availableForSale ? "Sold Out" :
                <><ShoppingCart className="w-5 h-5 mr-2" /> Add to Cart</>}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
