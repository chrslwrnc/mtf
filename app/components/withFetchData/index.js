import React from 'react';
import Rx from 'rxjs';

const withFetchData = (Component, fetch$) => class withFetchData {
	state = {
		data: {},
	}

	componentDidMount() {
		this.subject = Rx.Subject();
		if (this.props.url) this.subject.onNext(this.props.url);

		const data$ = this.subject
			.switchMap(fetch$);

    data$.subscribe((d) => {
			console.log(d);
    });
	}

	componentWillReceiveProps(nextProps) {
		this.subject.onNext(nextProps.url);
	}

	render() {
		const { url, ...props } = this.props;
		return <Component {...props} {...this.state.data} />
	}
}

export default withFetchData;
