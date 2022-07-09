export default function Breadcrumbs() {
    return (
        <section className="breadcrumbs-custom-inset">
            <div className="breadcrumbs-custom context-dark bg-overlay-60">
                <div className="container">
                    <h2 className="breadcrumbs-custom-title">Tours</h2>
                    <ul className="breadcrumbs-custom-path">
                        <li><a href="/kalbo-main-app">Home</a></li>
                        <li className="active">Tours</li>
                    </ul>
                </div>
                <div className="box-position"></div>
            </div>
        </section>
    )
}