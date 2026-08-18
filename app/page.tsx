import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Sobre from "@/components/Sobre"
import Servicos from "@/components/Servicos"
import Portfolio from "@/components/Portfolio"
import Localizacao from "@/components/Localizacao"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Servicos />
        <Portfolio />
        <Localizacao />
      </main>
      <Footer />
    </>
  )
}
