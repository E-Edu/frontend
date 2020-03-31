class MediaQuery {
    static matches(query: string, listener): boolean {
        const result: MediaQueryList = window.matchMedia(query);
        if (listener) {
            result.addListener((ev) => {
                listener(ev);
            });
        }
        return result.matches;
    }
}

export default MediaQuery;
