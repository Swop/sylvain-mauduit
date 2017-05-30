export default class StickyHeader {
    construct() {
        this.navigationNode = null;
        this.readoutNode = null;
        this.fixed = false;
        this.stickPoint = 0;
    }
    init() {
        const load = function() {
            this.navigationNode = document.getElementById('main-nav');
            this.stickPoint = this.navigationNode.offsetTop;
            window.onscroll = this.onScroll.bind(this);
        }.bind(this);

        if (document.readyState != 'loading'){
            load();
        } else {
            document.addEventListener('DOMContentLoaded', load);
        }
    }

    onScroll(e) {
        const distance = this.navigationNode.offsetTop - window.pageYOffset;
        const offset = window.pageYOffset;

        if (distance <= 0 && !this.fixed) {
            this.navigationNode.style.position = 'fixed';
            this.navigationNode.style.top = '0px';
            this.fixed = true;
        } else if (this.fixed && offset <= this.stickPoint) {
          this.navigationNode.style.position = 'static';
          this.fixed = false;
        }
    }
};
