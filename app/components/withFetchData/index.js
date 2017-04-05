import React from 'react';
import Rx from 'rxjs';

const withFetchData = (Component, fetch$) => class fetchAnswer {
	subject = Rx.Subject()

	state = {
		data: {},
	}

	componentDidMount() {
		const data$ = this.subject
      .switchMap(fetch$);

    data$.subscribe((d) => {
			console.log(d);
    });

		this.subject.onNext(this.props.url);
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
