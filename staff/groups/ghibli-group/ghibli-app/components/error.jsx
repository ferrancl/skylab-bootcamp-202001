function Error ({error, message, onClick}) {
    return  <div className="message" onClick={() => onClick()}>
        <div className="container">
            {error && <div className="text__container"><span className="text">{error}</span></div>}
            {message && <div className="text__container"><span className="text">{message}</span></div>}
        </div>
    </div>
}