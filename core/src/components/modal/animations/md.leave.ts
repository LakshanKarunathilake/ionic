import { Animation } from '../../../interface';

/**
 * Md Modal Leave Animation
 */
export default function mdLeaveAnimation(Animation: Animation, baseEl: HTMLElement): Promise<Animation> {
  const baseAnimation = new Animation();

  const backdropAnimation = new Animation();
  backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));

  const wrapperAnimation = new Animation();
  const wrapperEl = baseEl.querySelector('.modal-wrapper');
  wrapperAnimation.addElement(wrapperEl);

  wrapperAnimation
    .fromTo('opacity', 0.99, 0)
    .fromTo('translateY', '0px', '40px');

  backdropAnimation.fromTo('opacity', 0.4, 0.0);

  return Promise.resolve(baseAnimation
    .addElement(baseEl)
    .easing('cubic-bezier(0.47,0,0.745,0.715)')
    .duration(200)
    .add(backdropAnimation)
    .add(wrapperAnimation));
}
