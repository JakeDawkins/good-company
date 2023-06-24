const Footer = () => {
    return (
        <div className="flex flex-col">
            <div className="w-24 border-t border-black" />
            <div className="flex flex-row text-sm mt-4">
                <p>&copy;{new Date().getFullYear()} Jake Dawkins.</p>
                <p className="ml-2">Good vibes only.</p>
            </div>
        </div>
    )
}

export default Footer;