function Error ({error, message}) {
    return  <div className="message">
            {error && <div className="text">{error}</div>}
            {message && <div className="text">{message}</div>}
        </div>
}