import styled from 'styled-components'

export const ProfileCardWrapper = styled.div`
  min-width: 10.375rem; /* clamp wasn't respecting it's min-width */
  width: clamp(10.375rem, 100%, 21.875rem);
  background: #fff;
  box-shadow: 0 3.125rem 6.25rem -1.25rem rgba(8, 70, 94, 0.504835);
  border-radius: 0.9375rem;
`

export const CardTop = styled.div`
  height: 55vw;
  min-height: 7rem;
  max-height: 12.75rem; 
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: url("data:image/svg+xml,%3Csvg width='350' height='140' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3ClinearGradient x1='50%25' y1='.779%25' x2='50%25' y2='100%25' id='c'%3E%3Cstop stop-color='%230989B4' stop-opacity='0' offset='0%25'/%3E%3Cstop stop-color='%2353FFEE' offset='99.94%25'/%3E%3C/linearGradient%3E%3ClinearGradient x1='50%25' y1='.779%25' x2='50%25' y2='100%25' id='d'%3E%3Cstop stop-color='%230989B4' stop-opacity='0' offset='0%25'/%3E%3Cstop stop-color='%2353FFEE' offset='99.94%25'/%3E%3C/linearGradient%3E%3Cpath id='a' d='M0 0h350v140H0z'/%3E%3C/defs%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cmask id='b' fill='%23fff'%3E%3Cuse xlink:href='%23a'/%3E%3C/mask%3E%3Cuse fill='%2341CBD3' xlink:href='%23a'/%3E%3Cg mask='url(%23b)' opacity='.5'%3E%3Cg transform='translate(-11 -4)'%3E%3Cellipse fill='url(%23c)' transform='rotate(90 60.479 14.8)' cx='60.479' cy='14.8' rx='14.8' ry='14.834'/%3E%3Cellipse fill='url(%23d)' transform='rotate(180 14.834 14.8)' cx='14.834' cy='14.8' rx='14.834' ry='14.8'/%3E%3Cellipse fill='url(%23d)' cx='151.767' cy='14.8' rx='14.834' ry='14.8'/%3E%3Cellipse fill='url(%23c)' transform='rotate(-90 106.123 14.8)' cx='106.123' cy='14.8' rx='14.8' ry='14.834'/%3E%3Cellipse fill='url(%23c)' transform='rotate(90 243.055 14.8)' cx='243.055' cy='14.8' rx='14.8' ry='14.834'/%3E%3Cellipse fill='url(%23d)' transform='rotate(180 197.411 14.8)' cx='197.411' cy='14.8' rx='14.834' ry='14.8'/%3E%3Cellipse fill='url(%23d)' cx='334.344' cy='14.8' rx='14.834' ry='14.8'/%3E%3Cellipse fill='url(%23c)' transform='rotate(-90 288.7 14.8)' cx='288.699' cy='14.8' rx='14.8' ry='14.834'/%3E%3C/g%3E%3Cg transform='translate(-11 91.63)'%3E%3Cellipse fill='url(%23c)' transform='rotate(90 60.479 14.8)' cx='60.479' cy='14.8' rx='14.8' ry='14.834'/%3E%3Cellipse fill='url(%23d)' transform='rotate(180 14.834 14.8)' cx='14.834' cy='14.8' rx='14.834' ry='14.8'/%3E%3Cellipse fill='url(%23d)' cx='151.767' cy='14.8' rx='14.834' ry='14.8'/%3E%3Cellipse fill='url(%23c)' transform='rotate(-90 106.123 14.8)' cx='106.123' cy='14.8' rx='14.8' ry='14.834'/%3E%3Cellipse fill='url(%23c)' transform='rotate(90 243.055 14.8)' cx='243.055' cy='14.8' rx='14.8' ry='14.834'/%3E%3Cellipse fill='url(%23d)' transform='rotate(180 197.411 14.8)' cx='197.411' cy='14.8' rx='14.834' ry='14.8'/%3E%3Cellipse fill='url(%23d)' cx='334.344' cy='14.8' rx='14.834' ry='14.8'/%3E%3Cellipse fill='url(%23c)' transform='rotate(-90 288.7 14.8)' cx='288.699' cy='14.8' rx='14.8' ry='14.834'/%3E%3C/g%3E%3Cg transform='translate(-11 43.815)'%3E%3Cellipse fill='url(%23c)' transform='rotate(-90 60.479 14.8)' cx='60.479' cy='14.8' rx='14.8' ry='14.834'/%3E%3Cellipse fill='url(%23d)' cx='14.834' cy='14.8' rx='14.834' ry='14.8'/%3E%3Cellipse fill='url(%23d)' cx='151.767' cy='14.8' rx='14.834' ry='14.8'/%3E%3Cellipse fill='url(%23c)' transform='rotate(90 106.123 14.8)' cx='106.123' cy='14.8' rx='14.8' ry='14.834'/%3E%3Cellipse fill='url(%23c)' transform='rotate(-90 243.055 14.8)' cx='243.055' cy='14.8' rx='14.8' ry='14.834'/%3E%3Cellipse fill='url(%23d)' cx='197.411' cy='14.8' rx='14.834' ry='14.8'/%3E%3Cellipse fill='url(%23d)' cx='334.344' cy='14.8' rx='14.834' ry='14.8'/%3E%3Cellipse fill='url(%23c)' transform='rotate(90 288.7 14.8)' cx='288.699' cy='14.8' rx='14.8' ry='14.834'/%3E%3C/g%3E%3Cg transform='translate(11.822 18.77)'%3E%3Cellipse fill='url(%23c)' transform='rotate(90 60.479 14.8)' cx='60.479' cy='14.8' rx='14.8' ry='14.834'/%3E%3Cellipse fill='url(%23d)' transform='rotate(180 14.834 14.8)' cx='14.834' cy='14.8' rx='14.834' ry='14.8'/%3E%3Cellipse fill='url(%23d)' cx='151.767' cy='14.8' rx='14.834' ry='14.8'/%3E%3Cellipse fill='url(%23c)' transform='rotate(-90 106.123 14.8)' cx='106.123' cy='14.8' rx='14.8' ry='14.834'/%3E%3Cellipse fill='url(%23c)' transform='rotate(90 243.055 14.8)' cx='243.055' cy='14.8' rx='14.8' ry='14.834'/%3E%3Cellipse fill='url(%23d)' transform='rotate(180 197.411 14.8)' cx='197.411' cy='14.8' rx='14.834' ry='14.8'/%3E%3Cellipse fill='url(%23d)' cx='334.344' cy='14.8' rx='14.834' ry='14.8'/%3E%3Cellipse fill='url(%23c)' transform='rotate(-90 288.7 14.8)' cx='288.699' cy='14.8' rx='14.8' ry='14.834'/%3E%3C/g%3E%3Cg transform='translate(11.822 114.4)'%3E%3Cellipse fill='url(%23c)' transform='rotate(90 60.479 14.8)' cx='60.479' cy='14.8' rx='14.8' ry='14.834'/%3E%3Cellipse fill='url(%23d)' transform='rotate(180 14.834 14.8)' cx='14.834' cy='14.8' rx='14.834' ry='14.8'/%3E%3Cellipse fill='url(%23d)' cx='151.767' cy='14.8' rx='14.834' ry='14.8'/%3E%3Cellipse fill='url(%23c)' transform='rotate(-90 106.123 14.8)' cx='106.123' cy='14.8' rx='14.8' ry='14.834'/%3E%3Cellipse fill='url(%23c)' transform='rotate(90 243.055 14.8)' cx='243.055' cy='14.8' rx='14.8' ry='14.834'/%3E%3Cellipse fill='url(%23d)' transform='rotate(180 197.411 14.8)' cx='197.411' cy='14.8' rx='14.834' ry='14.8'/%3E%3Cellipse fill='url(%23d)' cx='334.344' cy='14.8' rx='14.834' ry='14.8'/%3E%3Cellipse fill='url(%23c)' transform='rotate(-90 288.7 14.8)' cx='288.699' cy='14.8' rx='14.8' ry='14.834'/%3E%3C/g%3E%3Cg transform='translate(11.822 66.585)'%3E%3Cellipse fill='url(%23c)' transform='rotate(-90 60.479 14.8)' cx='60.479' cy='14.8' rx='14.8' ry='14.834'/%3E%3Cellipse fill='url(%23d)' cx='14.834' cy='14.8' rx='14.834' ry='14.8'/%3E%3Cellipse fill='url(%23d)' cx='151.767' cy='14.8' rx='14.834' ry='14.8'/%3E%3Cellipse fill='url(%23c)' transform='rotate(90 106.123 14.8)' cx='106.123' cy='14.8' rx='14.8' ry='14.834'/%3E%3Cellipse fill='url(%23c)' transform='rotate(-90 243.055 14.8)' cx='243.055' cy='14.8' rx='14.8' ry='14.834'/%3E%3Cellipse fill='url(%23d)' cx='197.411' cy='14.8' rx='14.834' ry='14.8'/%3E%3Cellipse fill='url(%23d)' cx='334.344' cy='14.8' rx='14.834' ry='14.8'/%3E%3Cellipse fill='url(%23c)' transform='rotate(90 288.7 14.8)' cx='288.699' cy='14.8' rx='14.8' ry='14.834'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E") no-repeat;
  background-size: contain;
  border-radius: 0.9375rem 0.9375rem 0 0;
`

export const Photo = styled.img`
  width: clamp(5.5rem, 28vw, 6.5625rem);
  height: clamp(5.5rem, 28vw, 6.5625rem);
  border-radius: 50%;
  border: 5px solid #fff;
  margin-bottom: 0.8125rem;
`

export const Name = styled.p`
  font-weight: 700;
  font-size: 1.125rem;
  text-align: center;
  color: var(--text-color);
  margin-bottom: 0.5rem;
`

export const Age = styled.span`
  font-weight: 400;
  color: var(--text-color-light);
  padding-left: 0.53125rem;
`

export const Location = styled.p`
  font-size: 0.875rem;
  color: var(--text-color-light);
  text-align: center;
  margin-bottom: 1.75rem;
`

export const ProfileStats = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(2);
  row-gap: 0.5625rem;
  padding-top: 1.5rem;
  border-width: 0.0625rem 0px 0px 0px;
  border-style: solid;
  border-color: var(--stats-border);

  @media only screen and (max-width: 268px) {
    grid-template-columns: repeat(1, auto);
    row-gap: 1rem;
  }
`

export const StatWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Stat = styled.span`
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--text-color);
  text-align: center;
  margin-bottom: 0.5625rem;
`

export const Label = styled.span`
  font-size: 0.625rem;
  letter-spacing: 0.09375rem;
  color: var(--text-color-light);
  text-align: center;
`
