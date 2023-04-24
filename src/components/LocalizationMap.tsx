import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import styled from "styled-components";

export function LocalizationMap(): JSX.Element {
  const position = { lat: -22.900781, lng: -42.036651 };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBNmgAvpnZk0i4Fdhd_IzmgeG2uzponY2o",
  });
  return (
    <StyledLocalizationMap>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={position}
          zoom={15}
        >
          <Marker
            position={position}
            options={{
              label: {
                text: "Empire Burguer",
              },
            }}
          />
          <></>
        </GoogleMap>
      ) : (
        <></>
      )}
    </StyledLocalizationMap>
  );
}

const StyledLocalizationMap = styled.div`
  height: 200px;
`;
