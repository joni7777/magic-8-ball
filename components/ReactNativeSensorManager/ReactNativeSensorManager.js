import React, {Component} from 'react';
import { Text} from 'react-native';
import { Accelerometer, Gyroscope } from 'react-native-sensors';

const accelerationObservable = new Accelerometer({
    updateInterval: 100, // defaults to 100ms
});

class ReactNativeSensorManager extends Component {
    state = { x: 'a', y: '', z: '' };

    componentWillMount(){
        accelerationObservable
            .map(({ x, y, z }) => x + y + z)
            .filter(speed => speed > 20)
            .subscribe(speed => this.setState(speed));
    }

    render() {
        return (
            <View >
                <Text>{this.state.speed}</Text>
            </View>
        );
    }
}

export default ReactNativeSensorManager;