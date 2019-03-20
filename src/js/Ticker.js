class Ticker {
    constructor(fun, timeout = 1000) {
        this.fun = fun;
        this.timeout = timeout;
        this.id;
        this.isStopped = true;
    }

    __time() {
        if (this.isStopped) {
            return
        }
        this.id = setTimeout(() => {
            this.fun();
            this.__time();
        }, this.timeout);
    }

    start() {
        if (this.isStopped === false) {
            return
        }
        this.isStopped = false;
        this.__time()
    }

    stop() {
        this.isStopped = true;
        clearTimeout(this.id)
    }
}

export default (fun, timeout) => {
    const ticker = new Ticker(fun, timeout)
    ticker.start();
    return ticker
}