import React from 'react';

const Home = () => {
    return (
<div
            className="app-container flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
            style={{ backgroundImage: "url('../images/background.png')" }}
        >            <div className="logo mb-8">
                <img src="/images/logo.png" alt="Narrativa Logo" className="" />
                <img src="/images/NARRATIVA.png" alt="Narrativa" className="" />
            </div>

            <div className="grid grid-cols-2 gap-8 max-w-2xl">
                <div className="category flex flex-col items-center">
                    <img src="/images/choori.png" alt="추리" className="category-image" />
                    <img src="/images/choori_word.png" alt="추리" className="category" />
                </div>
                <div className="category flex flex-col items-center">
                    <img src="/images/gongpo.png" alt="공포" className="category-image" />
                    <img src="/images/gongpo_word.png" alt="공포" className="category" />
                </div>
                <div className="category flex flex-col items-center">
                    <img src="/images/love.png" alt="연애" className="category-image" />
                    <img src="/images/love_word.png" alt="연애" className="category" />
                </div>
                <div className="category flex flex-col items-center">
                    <img src="/images/raise.png" alt="성장" className="category-image" />
                    <img src="/images/raise_word.png" alt="성장" className="category" />
                </div>
            </div>
        </div>
    );
};

export default Home;
