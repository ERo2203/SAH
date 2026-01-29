import { supabase } from "@/lib/supabase"

export default async function Home() {
  const { data: products } = await supabase
    .from("products")
    .select("*")

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Products
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products?.map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded"
          >
            <h2 className="font-semibold">
              {product.name}
            </h2>
            <p className="mt-2">
              ${(product.price / 100).toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </main>
  )
}
