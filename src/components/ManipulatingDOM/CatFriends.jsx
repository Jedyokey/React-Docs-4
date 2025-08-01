import React, { useRef } from 'react'

const CatFriends = () => {
    const firstCatRef = useRef(null);
    const secondCatRef = useRef(null);
    const thirdCatRef = useRef(null);

    const handleScrollToFirstCat = () => {
        firstCatRef.current.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center"
        });
    }

    const handleScrollToSecondCat = () => {
        secondCatRef.current.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center"
        });
    }

    const handleScrollToThirdCat = () => {
        thirdCatRef.current.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center"
        });
    }

  return (
    <div className='cat-friends'>
        <nav className='cat-nav'>
            <button onClick={handleScrollToFirstCat}>Neo</button>
            <button onClick={handleScrollToSecondCat}>Millie</button>
            <button onClick={handleScrollToThirdCat}>Bella</button>
        </nav>

        <div>
            <ul className='img-list'>
                <li><img src="https://placecats.com/neo/300/200" alt="Neo" ref={firstCatRef} /></li>
                <li>
                    <img src="https://placecats.com/millie/200/200" alt="Millie" ref={secondCatRef}/>
                </li>
                <li>
                    <img src="https://placecats.com/bella/199/200" alt="Bella" ref={thirdCatRef} />
                </li>
            </ul>
        </div>
      
    </div>
  )
}

export default CatFriends
