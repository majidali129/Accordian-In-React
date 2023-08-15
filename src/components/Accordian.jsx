import AccordianItem from "./Item";
import "../custome.css";
import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];
const Accordian = () => {
  const [currOpen, setCurrOpen] = useState(null);

  return (
    <div className="accordian">
      {faqs.map((item, index) => {
        return (
          <AccordianItem
            curOpen={currOpen}
            onOpen={setCurrOpen}
            key={index}
            number={index}
            title={item.title}
            text={item.text}
          />
        );
      })}
    </div>
  );
};
export default Accordian;
