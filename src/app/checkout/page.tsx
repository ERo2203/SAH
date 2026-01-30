import { supabase } from "@/lib/supabase"
import { redirect } from "next/navigation"

export default async function CheckoutPage() {
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/login")
  }

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">
        Checkout (Protected)
      </h1>
    </main>
  )
}
