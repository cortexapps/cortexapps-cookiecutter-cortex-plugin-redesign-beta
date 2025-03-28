import type React from "react";
import { usePluginContextProvider } from "./PluginContextProvider";
import useEntityDescriptor from "../hooks/useEntityDescriptor";
import useEntityCustomData from "../hooks/useEntityCustomData";
import useEntityCustomEvents from "../hooks/useEntityCustomEvents";

const EntityDetails: React.FC = () => {
  const context = usePluginContextProvider();
  const entityTag = context?.entity?.tag || "";
  const {
    entity,
    isLoading: isEntityLoading,
  } = useEntityDescriptor({ entityTag });
  const {
    customData,
    isLoading: isCustomDataLoading,
  } = useEntityCustomData({ entityTag });
  const {
    customEvents,
    isLoading: isCustomEventsLoading,
  } = useEntityCustomEvents({ entityTag });

  const isLoading = isEntityLoading || isCustomDataLoading || isCustomEventsLoading;

  if (isLoading) {
    return (
      <div className="card">
        <div className="card-header">Entity Details</div>
        <div className="card-body">Loading...</div>
      </div>
    );
  }

  if (!entityTag) {
    return (
      <div className="card">
        <div className="card-header">Entity Details</div>
        <div className="card-body">No entity selected.</div>
      </div>
    );
  }

  return (
    <>
      <div className="card">
        <div className="card-header">Plugin Descriptor</div>
        <div className="card-body">
          <pre>{JSON.stringify(entity, null, 2)}</pre>
        </div>
      </div>
      {customData && (
        <div className="card">
          <div className="card-header">Custom Data</div>
          <div className="card-body">
            <pre>{JSON.stringify(customData, null, 2)}</pre>
          </div>
        </div>
      )}
      {customEvents && (
        <div className="card">
          <div className="card-header">Custom Events</div>
          <div className="card-body">
            <pre>{JSON.stringify(customEvents, null, 2)}</pre>
          </div>
        </div>
      )}
    </>
  );
};

export default EntityDetails;
