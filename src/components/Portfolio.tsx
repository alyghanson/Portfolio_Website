import { PortfolioCardsData } from "../PortfolioCardsData";
import PortfolioCard from "./PortfolioCard";


const Portfolio = () => {
    // Maps list of JSON Portolio elements to each card
    // TODO CSS for this component
    return (
        <div>
            <div className='Page'>
            {PortfolioCardsData.map((card, index) => {
                return <PortfolioCard {...card} key={index}></PortfolioCard>
            })
            }
            </div>
        </div>
    )
}

export default Portfolio