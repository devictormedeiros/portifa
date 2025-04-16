const HeadingDefault = ({data}) => (
    <div className="heading-default flex items-center justify-between pb-4 border-b border-white-10">
        <h2 className="content-title-h2 text-gray-200 uppercase">
        {data.title}
        </h2>
        <a href={data.link} title={data.title} className="content-title-h6 text-white-70">
            {data.linkText}
        </a>
    </div>
)

export default HeadingDefault;