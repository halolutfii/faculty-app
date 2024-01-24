import { Navbar, Avatar } from "flowbite-react";

const Navbars = () => {
    return (
        <Navbar
        fluid={true}
        rounded={true}
         className="bg-teal-400">
        <Navbar.Brand href="https://flowbite.com/">
            <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            FAKULTAS ILKOM
            </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
            <Avatar rounded={true} />
            <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
            <Navbar.Link
            href="/navbars"
            active={true}
            >
            Beranda
            </Navbar.Link>
            <Navbar.Link href="#Cari">
            Cari Dosen
            </Navbar.Link>
            <Navbar.Link href="#Dokumen">
            Dokumen
            </Navbar.Link>
            <Navbar.Link href="#About">
            Tentang
            </Navbar.Link>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default Navbars ;