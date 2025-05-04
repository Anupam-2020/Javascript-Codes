import React, { useEffect, useRef, useState } from 'react'

const PaginationUsingRef = () => {
    let [data, setdata] = useState([]);
    let [count, setCount] = useState(0);
    let currentRef = useRef(null);
  
    useEffect(() => {
      const getData = async () => {
        try {
          let json = await fetch("https://picsum.photos/v2/list?page=h");
          let data = await json.json();
          console.log(data);
          setdata(data);
        } catch (error) {
          console.log(error);
        }
      };
  
      getData();
    }, []);

    const handleHoverEvent = () => {
        setCount(count === Math.floor((data.length - 1) / 3) ? 0 : count + 1);
    }
   
    useEffect(() => {
        currentRef.current = setInterval(handleHoverEvent, 3000);
        return () => clearInterval(currentRef.current);
    }, [count]);

    const handleMouseEnter = () => {
        clearInterval(currentRef.current);
        currentRef.current = null;
    };
  
    const handleMouseLeave = () => {
        currentRef.current = setInterval(handleHoverEvent, 3000);
        console.log(currentRef.current)
    };
  
    return (
      <div>
        <div
          style={{ display: "flex", flexDirection: "row" }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {data &&
            data.slice(count * 3, count * 3 + 3).map((pics) => {
              return (
                <div key={pics.id}>
                  <img
                    style={{ height: "90vh", width: "33.33vw" }}
                    src={`${pics.download_url}`}
                  />
                </div>
              );
            })}
        </div>
        <div
          style={{
            width: "70vw",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {count > 0 && (
            <button onClick={() => setCount(count === 0 ? 0 : count - 1)}>
              ◀️
            </button>
          )}
          <h2 style={{ display: "inline-block" }}>{count + 1}</h2>
          {count + 1 <= Math.floor((data.length - 1) / 3) && (
            <h2
              onClick={() => setCount(count + 1)}
              style={{ display: "inline-block" }}
            >
              {count + 2}
            </h2>
          )}
          {count + 2 <= Math.floor((data.length - 1) / 3) && (
            <h2
              onClick={() => setCount(count + 2)}
              style={{ display: "inline-block" }}
            >
              {count + 3}
            </h2>
          )}
          {count + 3 <= Math.floor((data.length - 1) / 3) && (
            <h2
              onClick={() => setCount(count + 3)}
              style={{ display: "inline-block" }}
            >
              {count + 4}
            </h2>
          )}
          {count < Math.floor((data.length - 1) / 3) && (
            <button
              onClick={() =>
                setCount(
                  count === Math.floor((data.length - 1) / 3)
                    ? Math.floor((data.length - 1) / 3)
                    : count + 1
                )
              }
            >
              ▶️
            </button>
          )}
        </div>
      </div>
    );
}

export default PaginationUsingRef;