import { useState } from "react";

const useMeal = (meal) => {
  const [content, setContent] = useState([]);
    meal?.then((a) => {
      setContent(a);
    });
  return content
}

export default useMeal