import Image from 'next/image';
type SafeNumber = number | `${number}`;
type BaseImageProps = {
    name: string,
    image: string,
    width?: SafeNumber;
    height?: SafeNumber;
    onClick: (name: string) => void
}
const BaseImage = ({ name, image, width,height, onClick }: BaseImageProps) => {
    const onClickImage = (name: string) => {
        onClick(name)
    }
    return (
        <>
            <Image width={width} height={height} src={image} alt={name} onClick={() => onClickImage(name)}/>
        </>
    )
}
export default BaseImage