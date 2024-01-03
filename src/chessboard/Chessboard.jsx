import "./chessboard.css"

export default function Chessboard() {
    return (
        <div className="chessboard">
            <input type="text" id="move" placeholder="Enter a square e.g. d4"></input>
            <button>Submit</button>

            <div className="rank">
                <div className="lightsquare">a8</div>
                <div className="darksquare">b8</div>
                <div className="lightsquare">c8</div>
                <div className="darksquare">d8</div>
                <div className="lightsquare">e8</div>
                <div className="darksquare">f8</div>
                <div className="lightsquare">g8</div>
                <div className="darksquare">h8</div>
            </div>

            <div className="rank">
                <div className="darksquare">a7</div>
                <div className="lightsquare">b7</div>
                <div className="darksquare">c7</div>
                <div className="lightsquare">d7</div>
                <div className="darksquare">e7</div>
                <div className="lightsquare">f7</div>
                <div className="darksquare">g7</div>
                <div className="lightsquare">h7</div>
            </div>

            <div className="rank">
                <div className="lightsquare">a6</div>
                <div className="darksquare">b6</div>
                <div className="lightsquare">c6</div>
                <div className="darksquare">d6</div>
                <div className="lightsquare">e6</div>
                <div className="darksquare">f6</div>
                <div className="lightsquare">g6</div>
                <div className="darksquare">h6</div>
            </div>

            <div className="rank">
                <div className="darksquare">a5</div>
                <div className="lightsquare">b5</div>
                <div className="darksquare">c5</div>
                <div className="lightsquare">d5</div>
                <div className="darksquare">e5</div>
                <div className="lightsquare">f5</div>
                <div className="darksquare">g5</div>
                <div className="lightsquare">h5</div>
            </div>

            <div className="rank">
                <div className="lightsquare">a4</div>
                <div className="darksquare">b4</div>
                <div className="lightsquare">c4</div>
                <div className="darksquare">d4</div>
                <div className="lightsquare">e4</div>
                <div className="darksquare">f4</div>
                <div className="lightsquare">g4</div>
                <div className="darksquare">h4</div>
            </div>

            <div className="rank">
                <div className="darksquare">a3</div>
                <div className="lightsquare">b3</div>
                <div className="darksquare">c3</div>
                <div className="lightsquare">d3</div>
                <div className="darksquare">e3</div>
                <div className="lightsquare">f3</div>
                <div className="darksquare">g3</div>
                <div className="lightsquare">h3</div>
            </div>

            <div className="rank">
                <div className="lightsquare">a2</div>
                <div className="darksquare">b2</div>
                <div className="lightsquare">c2</div>
                <div className="darksquare">d2</div>
                <div className="lightsquare">e2</div>
                <div className="darksquare">f2</div>
                <div className="lightsquare">g2</div>
                <div className="darksquare">h2</div>
            </div>

            <div className="rank">
                <div className="darksquare">a1</div>
                <div className="lightsquare">b1</div>
                <div className="darksquare">c1</div>
                <div className="lightsquare">d1</div>
                <div className="darksquare">e1</div>
                <div className="lightsquare">f1</div>
                <div className="darksquare">g1</div>
                <div className="lightsquare">h1</div>
            </div>
        </div>
    )
}