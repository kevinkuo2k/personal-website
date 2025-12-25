const Timeline = ({ items, images = [] }) => {
    return (
        <div className="space-y-12">
            {items.map((item, index) => (
                <div key={index} className="timeline-item">
                    <div className="card">
                        <h3 className="text-xl md:text-2xl font-semibold text-primary-text mb-4">
                            {item.title}
                        </h3>
                        <p className="text-secondary-text leading-relaxed whitespace-pre-line">
                            {item.content}
                        </p>
                        {images[index] && images[index].length > 0 && (
                            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {images[index].map((img, imgIndex) => (
                                    <img
                                        key={imgIndex}
                                        src={img}
                                        alt={`${item.title} - ${imgIndex + 1}`}
                                        className="content-img w-full h-48 object-cover"
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Timeline
