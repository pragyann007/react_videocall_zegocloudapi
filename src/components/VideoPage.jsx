import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const VideoPage = () => {
    const { id } = useParams();
    const roomID = id;

    let myMeeting = async (element) => {
        // generate Kit Token
        const appID = 1726232774;
        const serverSecret = "b2e7ea64c045bd6db53ebae98b052897";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(), 9292929029);

        // Create instance object from Kit Token
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        // Start the call
        zp.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name: 'Personal link',
                    url: window.location.protocol + '//' +
                        window.location.host + window.location.pathname +
                        '?roomID=' +
                        roomID,
                },
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.GroupCall, // Modify to [ZegoUIKitPrebuilt.OneONoneCall] for 1-on-1 calls
            },
        });
    };

    return (
        <div>
            VideoPage , {id}
            <div ref={(element) => {
                if (element) {
                    myMeeting(element);
                }
            }} />
        </div>
    );
};

export default VideoPage;
