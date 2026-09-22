import Link from "next/link"
import Image from "next/image";
import NavItems from "@/components/NavItems";
import UserDropdown from "@/components/UserDropdown";
const Header = () => {
    return (
        <header className="sticky top-0 header">
            <div className="container header-wrapper">
                <Link href={"/"}>
                    <Image src="/assets/icons/logo.svg" alt="FinSight logo" width={160} height={42} className="h-8 w-auto cursor-pointer"/>

                </Link>
                <nav className="hidden sm:block">
                    {/*     NavItems    */}
                    <NavItems />
                </nav>
                {/*     User Dropdown     */}
                <UserDropdown />

            </div>
        </header>
    )
}
export default Header
