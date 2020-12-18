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
        // onClick={() => props.moveBot(props.bot)}
      >
        {/* <div> */}
          <div className="image" onClick={() => props.moveBot(props.bot)}>
            <img alt="oh no!" src={props.bot.avatar_url} />
          </div>
          <div className="content" onClick={() => props.moveBot(props.bot)}>
            <div className="header">
              {props.bot.name}
              <i className={botTypeClasses[props.bot.bot_class]} />
            </div>
            <div className="meta text-wrap">
              <small>{props.bot.catchphrase}</small>
            </div>
          </div>
        {/* </div> */}
        <div className="extra content">
          <span onClick={() => props.moveBot(props.bot)}>
            <i className="icon heartbeat" />
            {props.bot.health}
          </span>
        
          <span onClick={() => props.moveBot(props.bot)}>
            <i className="icon lightning" />
            {props.bot.damage}
          </span>
          <span onClick={() => props.moveBot(props.bot)}>
            <i className="icon shield" />
            {props.bot.armor}
          </span>
          <span>
            <div className="ui center aligned segment basic">
              <button
                className="ui mini red button"
                onClick={() =>
                  props.deleteBot(props.bot)
                }
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
