import React, { Component } from 'react';

export class DragonAvatar extends Component {
    render() {

        const { generationId, dragonId, traits } = this.props.dragon;

        if (!dragonId) return <div>No dragons here</div>;

        const traitValues = traits.map((trait, index) => {
            return (
                <p key={index}>{trait.traitType[0].toUpperCase() + trait.traitType.slice(1)}: <span>{trait.traitValue[0].toUpperCase() + trait.traitValue.slice(1)}</span></p>)
        });

        return (
            <div className="dragonDeetsContainer">
                <div className="identWrapper">
                    <span>G{generationId} </span>
                    <span>I{dragonId}</span>
                </div>
                <div className="traitsString">{traits.length > 0 && traitValues}</div>
            </div>
        )
    }
}

export default DragonAvatar;