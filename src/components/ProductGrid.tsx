import { useEffect, useState } from "react";
import { fetchProducts, ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { Loader2, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const ProductGrid = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const addItem = useCartStore((s) => s.addItem);
  const isCartLoading = useCartStore((s) => s.isLoading);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts(20)
      .then(setProducts)
      .catch((err) => console.error("Failed to fetch products:", err))
      .finally(() => setLoading(false));
  }, []);

  const handleAddToCart = async (e: React.MouseEvent, product: ShopifyProduct) => {
    e.stopPropagation();
    const variant = product.node.variants.edges[0]?.node;
    if (!variant) return;
    await addItem({
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || [],
    });
    toast.success(`${product.node.title} added to cart`, { position: "top-center" });
  };

  if (loading) {
    return (
      <section id="shop" className="py-24 bg-background">
        <div className="container mx-auto px-6 text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto text-muted-foreground" />
        </div>
      </section>
    );
  }

  return (
    <section id="shop" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-secondary font-body font-semibold tracking-widest uppercase text-sm">
            Shop
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-3">
            Our Products
          </h2>
          <p className="text-muted-foreground font-body mt-4 text-lg">
            Browse our selection of shipping supplies and essentials.
          </p>
        </div>

        {products.length === 0 ? (
          <div className="text-center py-16">
            <ShoppingCart className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground font-body text-lg">No products found</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {products.map((product) => {
              const image = product.node.images.edges[0]?.node;
              const price = product.node.priceRange.minVariantPrice;
              return (
                <div
                  key={product.node.id}
                  onClick={() => navigate(`/product/${product.node.handle}`)}
                  className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-shadow cursor-pointer group"
                >
                  <div className="aspect-square bg-muted overflow-hidden">
                    {image ? (
                      <img
                        src={image.url}
                        alt={image.altText || product.node.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                        No image
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading text-lg font-bold text-foreground mb-1 truncate">
                      {product.node.title}
                    </h3>
                    <p className="text-muted-foreground font-body text-sm mb-3 line-clamp-2">
                      {product.node.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-heading text-xl font-bold text-foreground">
                        {price.currencyCode} {parseFloat(price.amount).toFixed(2)}
                      </span>
                      <Button
                        size="sm"
                        onClick={(e) => handleAddToCart(e, product)}
                        disabled={isCartLoading}
                        className="gradient-gold text-accent-foreground hover:opacity-90"
                      >
                        {isCartLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <><ShoppingCart className="w-4 h-4 mr-1" /> Add</>}
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
