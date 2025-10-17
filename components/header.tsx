import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="bg-black border-b-2 border-primary sticky">
      <div className="container mx-auto max-w-[1220px] px-4 py-6">
        <Link href="/" className="flex justify-center items-center gap-3">
          <Image src="/favicon.ico" alt="Logo" width={48} height={48} />
          <h1 className="text-2xl md:text-3xl font-bold text-primary tracking-wide">Melhores PT Sites de Casinos</h1>
        </Link>
      </div>
    </header>
  )
}
