import React, {useContext} from "react";
import { StyleSheet, View } from "react-native";
import { useState } from "react/cjs/react.development";
import FeedList from "../components/FeedList";
import FloatingWriteButton from "../components/FloatingWriteButton";
import LogContext from "../context/LogContext";

function FeedsScreen() {
    const {logs} = useContext(LogContext);
    const [hidden, setHidden] = useState(false);
    const onScrolledToBottom = (isBottom) => {
        if (hidden !== isBottom) {
            setHidden(isBottom);
        }
    };

    return(
        <View style={styles.block} >
            <FeedList logs={logs} onScrolledToBottom={onScrolledToBottom} />
            <FloatingWriteButton hidden={hidden}/>
        </View>
    );
}

const styles = StyleSheet.create({
    block: {
        flex: 1,
    },
});

export default FeedsScreen;