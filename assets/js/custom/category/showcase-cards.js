export default class ShowcaseCards {
    constructor() {
        this.activeClass = 'showcaseCard--active';
        this.hoverDelay = 250;

        this.enableHover = true;
        this.activeCard = null;
        this.hoverActivateTimeout = null;
        this.unhoverDeactivateTimeout = null;
    }

    init() {
        document.querySelectorAll('.showcaseCard')
            .forEach(el => {
                el.addEventListener('mouseenter', e => this.handleHover(e.currentTarget));
                el.addEventListener('mouseleave', () => this.handleUnhover());
            });
        document.querySelectorAll('.showcaseCard-control-enlarge svg')
            .forEach(el => {
                el.addEventListener('click', e => this.handleExplicitActivate(e.currentTarget));
            });
        document.querySelectorAll('.showcaseCard-control-shrink svg')
            .forEach(el => {
                el.addEventListener('click', () => this.handleExplicitDeactivate());
            });
    }

    handleHover(el) {
        if (!this.enableHover) {
            return;
        }

        clearTimeout(this.hoverActivateTimeout);
        clearTimeout(this.unhoverDeactivateTimeout);

        this.hoverActivateTimeout = setTimeout(() => {
            this.activate(el);
        }, this.hoverDelay);
    }

    handleUnhover() {
        if (!this.enableHover) {
            return;
        }

        clearTimeout(this.hoverActivateTimeout);
        clearTimeout(this.unhoverDeactivateTimeout);

        this.unhoverDeactivateTimeout = setTimeout(() => {
            this.deactivate();
        }, this.hoverDelay);
    }

    handleExplicitActivate(el) {
        const card = el.closest('.showcaseCard');
        this.activate(card);
        this.enableHover = true;
    }

    handleExplicitDeactivate() {
        this.enableHover = false;
        this.deactivate();
    }

    activate(el) {
        this.deactivate();
        el.classList.add(this.activeClass);
        this.activeCard = el;
    }

    deactivate() {
        if (this.activeCard) {
            this.activeCard.classList.remove(this.activeClass);
        }
    }
}