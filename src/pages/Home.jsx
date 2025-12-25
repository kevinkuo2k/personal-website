import heroImage from '../assets/home/496408853_9978422018847321_3776776443857767059_n.jpg'

const Home = () => {
    return (
        <div className="relative min-h-screen flex flex-col">
            {/* Hero Image Background */}
            <div
                className="absolute inset-0 z-0 opacity-20"
                style={{
                    backgroundImage: `url(${heroImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                }}
            />

            {/* Content */}
            <div className="relative z-10 flex-1 flex flex-col justify-center items-start px-6 md:px-12 lg:px-20 py-20">
                <div className="max-w-5xl space-y-6">
                    <h1 className="page-heading">
                        PORTFOLIO
                    </h1>
                    <p className="text-xl md:text-2xl text-secondary-text font-light max-w-2xl">
                        探索我的學習旅程
                    </p>
                </div>
            </div>

            {/* Footer Contact */}
            <footer className="relative z-10 border-t border-border bg-primary-bg py-8">
                <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20">
                    <p className="text-secondary-text text-sm">
                        Contact: <a href="mailto:kevinkuo2k@gmail.com" className="text-primary-text hover:underline transition-all">kevinkuo2k@gmail.com</a>
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default Home
