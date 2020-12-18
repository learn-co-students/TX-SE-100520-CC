import React from "react";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star"
};

const BotCard = props => {
  return (
    <div className="ui column">
      <div
        className="ui card"
        key={props.bot.id}
        // NOTE: I moved the onclick to the "image" and "content" divs only
        // as my solution to make sure the delete button did not also add to
        // yourbotarmy when clicked
      >
        <div className="image" onClick={() => props.manageBot(props.bot)}>
          <img alt="oh no!" src={props.bot.avatar_url} />
        </div>
        <div className="content" onClick={() => props.manageBot(props.bot)}>
          <div className="header">
            {props.bot.name}
            <i className={botTypeClasses[props.bot.bot_class]} />
          </div>
          <div className="meta text-wrap">
            <small>{props.bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {props.bot.health}
          </span>

          <span>
            <i className="icon lightning" />
            {props.bot.damage}
          </span>
          <span>
            <i className="icon shield" />
            {props.bot.armor}
          </span>
          <span>
            <div className="ui center aligned segment basic">
              <button
                className="ui mini red button"
                onClick={() => props.deleteBot(props.bot.id)}
              >
                x
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default BotCard;
