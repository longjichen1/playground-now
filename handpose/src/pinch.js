import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const pinchGesture = new GestureDescription('pinch');

pinchGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.75);
pinchGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);
pinchGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0)
pinchGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0)

pinchGesture.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
pinchGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0)
pinchGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.5)
pinchGesture.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.5)

pinchGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
pinchGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.5)
pinchGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.5)

pinchGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 0.75);
pinchGesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 0.25)
pinchGesture.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.75)

pinchGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
pinchGesture.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.5);
pinchGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0)
pinchGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0)



