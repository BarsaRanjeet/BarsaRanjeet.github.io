import Card from 'react-bootstrap/Card';

function News({articles}) {
    console.log(articles);
    return (
        <div className="d-flex justify-content-center align-items-center w-100 mt-4">
            <Card style={{ width: '55rem' }}>
                <div className="row no-gutters">
                    <div className="col-md-4 d-flex align-items-center">
                        <Card.Img variant="top" src={articles.image} className='m-2'/>
                    </div>
                    <div className="col-md-8">
                        <Card.Body>
                            <h1 style={{ fontSize: "20px" }}>{articles.title}</h1>
                            <h6 style={{ fontSize: "12px" }}>{articles.source.name} {new Date(articles.publishedAt).toLocaleString()}</h6>
                            <h5 style={{ fontSize: "18px" }}>
                                {articles.content}
                            </h5>
                            <h6 style={{ fontSize: "12px" }}>Read more at {articles.source.url}</h6>
                        </Card.Body>
                    </div>
                </div>
            </Card>
        </div>

    );
}

export default News;