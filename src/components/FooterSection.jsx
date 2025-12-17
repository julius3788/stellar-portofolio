export const FooterSection = () => {
    return (
        <footer className="py-6 px-4 bg-background/80 backdrop-blur-md mt-24">
            <div className="container mx-auto max-w-5xl text-center">
                <p className="text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} Julius Sutrisno. All rights reserved.
                </p>
            </div>
        </footer>
    );
}