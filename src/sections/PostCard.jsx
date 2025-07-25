import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";
import {useRef} from "react";

const PostCard = () => {
    const videoRef = useRef(null);
    useGSAP(() => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '.post-card',
                start: 'top center',
                end: 'bottom center',
                scrub: true,
            }
        })

        videoRef.current.onloadedmetadata = () => {
            timeline.to(videoRef.current, {
                currentTime: videoRef.current.duration,
                duration: 3,
                ease: "power1.inOut",
            }, '<')
        }
    })

    return (
        <section className="post-card">
            <div className="animated-gradient-bg"></div>
            <div className="post-card-wrapper group hover:rotate-1 hover:-[1.02] transition duration-700">
                <img src="/images/overlay.webp" alt="Visit Leonida Keys"/>
                <video
                    ref={videoRef}
                    muted
                    playsInline
                    autoPlay
                    preload="auto"
                    src="/videos/postcard-vd.mp4"
                />
                <button className="group-hover:bg-yellow transition duration-700">
                    Explore Leonida Keys
                </button>
            </div>
        </section>
    )
}

export default PostCard