import {
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

function StatCard({
  title,
  value,
  change,
  trend = "up",
  description,
  icon: Icon,
  type = "default",
}) {
  return (
    <div className={`stat-card stat-${type}`}>

      {/* TOP */}
      <div className="stat-top">

        <div className="stat-icon">
          {Icon && <Icon size={21} />}
        </div>

        {change && (
          <div
            className={`stat-change ${
              trend === "up"
                ? "trend-up"
                : "trend-down"
            }`}
          >
            {trend === "up" ? (
              <ArrowUpRight size={14} />
            ) : (
              <ArrowDownRight size={14} />
            )}

            <span>{change}</span>
          </div>
        )}

      </div>

      {/* VALUE */}
      <div className="stat-value">
        {value}
      </div>

      {/* TITLE */}
      <div className="stat-title">
        {title}
      </div>

      {/* DESCRIPTION */}
      {description && (
        <div className="stat-description">
          {description}
        </div>
      )}

    </div>
  );
}

export default StatCard;