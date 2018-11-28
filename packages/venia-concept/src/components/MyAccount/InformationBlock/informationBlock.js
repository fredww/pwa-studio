import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List } from '@magento/peregrine';
import classify from 'src/classify';
import ActionButton from '../ActionButton';
import defaultClasses from './informationBlock.css';

class InformationBlock extends Component {
    static propTypes = {
        classes: PropTypes.shape({
            root: PropTypes.string,
            title: PropTypes.string,
            actions: PropTypes.string
        }),
        title: PropTypes.string,
        actions: PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string,
                onClick: PropTypes.func
            })
        )
    };

    get blockTitle() {
        const { title, classes } = this.props;

        return title ? <h3 className={classes.title}>{title}</h3> : null;
    }

    render() {
        const { blockTitle } = this;
        const { classes, actions, children } = this.props;

        return (
            <div className={classes.root}>
                {blockTitle}
                {children}
                <List
                    items={actions}
                    getItemKey={({ title }) => title}
                    render={({ children }) => (
                        <div className={classes.actions}>{children}</div>
                    )}
                    renderItem={({ item: { title, onClick } }) => (
                        <ActionButton onClick={onClick}>{title}</ActionButton>
                    )}
                />
            </div>
        );
    }
}

export default classify(defaultClasses)(InformationBlock);
