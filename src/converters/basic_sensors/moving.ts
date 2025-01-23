import { BasicAccessory } from '../interfaces';
import { ExposesEntryWithBinaryProperty, ExposesEntryWithProperty } from '../../z2mModels';
import { hap } from '../../hap';
import { BinarySensorHandler } from './binary';

export class MovingSensorHandler extends BinarySensorHandler {
  public static readonly exposesName: string = 'moving';

  constructor(expose: ExposesEntryWithProperty, otherExposes: ExposesEntryWithBinaryProperty[], accessory: BasicAccessory) {
    super(
      accessory,
      expose as ExposesEntryWithBinaryProperty,
      otherExposes,
      MovingSensorHandler.generateIdentifier,
      'Motion Sensor (moving)',
      (n, t) => new hap.Service.MotionSensor(n, (MovingSensorHandler.exposesName + ' ' + (t ?? '')).trim()),
      hap.Characteristic.MotionDetected,
      true,
      false
    );
