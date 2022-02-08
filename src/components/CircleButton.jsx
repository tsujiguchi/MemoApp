import { StyleSheet, Text, View } from 'react-native';
import { string, shape } from 'prop-types';
import { Entypo } from '@expo/vector-icons';

export default function CircleButton(props) {
  const { children, style } = props;
  return (
    <View style={[styles.circleButton, style]}>
      <Entypo name="plus" size={32} color="white" />
    </View>
  );
}

CircleButton.propTypes = {
  children: string.isRequired,
  style: shape(),
};

CircleButton.defaultProps = {
  style: null,
};

const styles = StyleSheet.create({
  circleButton: {
    backgroundColor: '#467FD3',
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    // iOSのみの設定
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    // Android
    elevation: 8,
  },
  circleButtonLable: {
    color: '#FFFFFF',
    fontSize: 40,
    lineHeight: 40,
  },
});
