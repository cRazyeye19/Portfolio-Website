import Card from "./Card";
import { portfolioItems } from "../data/portfolioData";

const PortfolioGrid = () => {
  return (
    <section className="max-w-6xl mx-auto py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioItems.map((item, index) => (
          <Card
            key={index}
            tag={item.tag}
            title={item.title}
            description={item.description}
            icon={item.icon}
            bgColor={item.bgColor}
            tagColor={item.tagColor}
          />
        ))}
      </div>
    </section>
  );
};

export default PortfolioGrid;
