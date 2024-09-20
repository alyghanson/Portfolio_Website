import "../styles/PortfolioCard.css"
interface PortfolioCardProps{
    /**Name of Project */
    title: string;
    /**Project URL to Repository README */
    url: string;
    /**Project Description*/
    description: string;
    /**Local Path to Photo of Project*/
    photoUrl: string;
    /**Date of Project */
    date: string;

}


const PortfolioCard = ({title, url, description, photoUrl, date}: PortfolioCardProps) => {
    // Renders individual Portfolio Card
    return (
        <div className="Card">

            {/* <div className="LeftCard">
            
                <img src={photoUrl} alt="Test Image" />
            
            </div> */}

            <div className="RightCard">
                <div className="Title">
                    {title}
                </div>

                <div className="Date">
                    {date}
                </div>

                <div className="Description">
                    {description}
                </div>

                <div className="Url">
                    <a href={url}>Check It Out Here</a>
                </div>
            </div>

        </div>
    );
}

export default PortfolioCard;