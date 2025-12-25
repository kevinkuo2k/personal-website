import { useState } from 'react'
import Timeline from '../components/Timeline'

// Import images
import harmonica1 from '../assets/highlights/harmonica/496149851_9978421775514012_8001185684869434258_n.jpg'
import harmonica2 from '../assets/highlights/harmonica/497432623_9978422092180647_7205994780320195985_n.jpg'
import harmonica3 from '../assets/highlights/harmonica/537353857_24491144467218050_2216417837504638031_n.jpg'

import research1 from '../assets/highlights/research/0770e4b8-35fd-4ae9-b7f8-6433855f0adb.jpg'
import research2 from '../assets/highlights/research/3772ba8f-afc2-4841-91f2-9bbbd6d5d170.jpg'
import research3 from '../assets/highlights/research/LINE_ALBUM_1130613成發_240613_94.jpg'
import research4 from '../assets/highlights/research/螢幕擷取畫面 2025-12-24 232325.png'

const Highlights = () => {
    const [activeTab, setActiveTab] = useState('research')

    const researchTimeline = [
        {
            title: '議題設定｜從個人經驗出發,選擇困難但重要的題目',
            content: '在專題發想階段,我選擇以「農地工廠」作為研究主題,這個議題與我的家庭經驗有所連結,也讓我有更強的動機深入理解其背後的問題。雖然這是一個範圍廣、結構複雜的題目,指導老師也曾提醒風險,但我仍希望能在研究過程中逐步縮小焦點,嘗試從混亂中整理出更清楚、具體的問題意識。'
        },
        {
            title: '資料蒐集｜走進田野,理解不同立場的現實處境',
            content: '在資料蒐集階段,除了查閱相關文獻,我們也實地走訪台中大里區一帶,訪談當地農民與農地工廠廠主,試圖理解不同角色在同一議題下的處境與考量。實際訪談的經驗讓我深刻體會到人際連結在田野研究中的重要性,也意識到語言、用詞與溝通方式,會直接影響研究者是否能被受訪者信任,進而影響資料的深度與完整性。'
        },
        {
            title: '專題撰寫｜以專題報導呈現多重觀點',
            content: '在專題撰寫階段,我們選擇以「專題報導」的形式呈現研究成果,嘗試在報導中並置農民與工廠廠主兩種不同的觀點,呈現議題本身的張力與複雜性。同時,我們也整理了政府目前針對農地工廠的相關處置方式,希望讓讀者能在理解個別立場的同時,看見制度層面的影響。'
        },
        {
            title: '成果發表｜在回饋中學習研究的更多可能',
            content: '在公開成果發表中,我們收到了許多具建設性的回饋,例如未來可搭配量化調查補強質性訪談的觀察、進一步釐清受訪對象的代表性等。這些建議讓我開始思考研究方法與研究深度之間的關係,也更清楚認識到一個議題還有許多可以持續延伸與深化的方向。整體而言,這次專題不只是一次成果呈現,也是一段理解研究限制與可能性的學習過程。'
        }
    ]

    const harmonicaTimeline = [
        {
            title: '接觸口琴｜從一次演出開始的選擇',
            content: '升上高中後,我希望在課業之外嘗試新的事物。在社團博覽會上,學長們演奏〈死神之子〉時所展現的聲音層次與舞台氛圍,讓我留下深刻的印象,也促使我決定加入口琴社。從那時開始,口琴成為我高中生活中一個重要、但不張揚的存在。'
        },
        {
            title: '擔任團長｜在角色轉換中學習協調',
            content: '升上高二後,我接下了口琴社團長的職務,第一次需要站在指揮與統籌的位置,學習如何在不同聲部與部門之間協調進度與想法。這段經驗讓我逐漸理解,音樂不只是個人的練習成果,也是一種需要溝通與信任的集體合作。'
        },
        {
            title: '比賽經驗｜在舞台上累積實戰經驗',
            content: '在高中期間,我們也參與了學生音樂比賽。準備比賽的過程中,反覆練習與調整細節成為日常的一部分,而正式站上舞台演出的經驗,讓我學習如何在有限的時間內穩定發揮,也更習慣面對觀眾與評審的目光。'
        },
        {
            title: '成果發表｜用音樂呈現一段累積的過程',
            content: '除了比賽之外,社團的成果發表會同樣是重要的里程碑。這不只是一次演出,更是將平時練習與合作成果完整呈現的機會。透過這些舞台經驗,我逐漸找到一種屬於自己的表達方式,也讓口琴成為我能自在站上台、展現自己的媒介之一。'
        }
    ]

    const researchImages = [
        [research1],
        [research2],
        [research3],
        [research4]
    ]

    const harmonicaImages = [
        [harmonica1],
        [harmonica2],
        [harmonica3],
        []
    ]

    return (
        <div className="page-container">
            <div className="content-wrapper">
                <h1 className="page-heading mb-12">
                    Highlights
                </h1>

                {/* Tab Navigation */}
                <div className="flex gap-6 mb-12 border-b border-border">
                    <button
                        onClick={() => setActiveTab('research')}
                        className={`pb-3 px-1 text-base font-medium transition-all duration-200 border-b-2 ${activeTab === 'research'
                                ? 'border-accent text-accent'
                                : 'border-transparent text-secondary-text hover:text-primary-text'
                            }`}
                    >
                        專題研究
                    </button>
                    <button
                        onClick={() => setActiveTab('harmonica')}
                        className={`pb-3 px-1 text-base font-medium transition-all duration-200 border-b-2 ${activeTab === 'harmonica'
                                ? 'border-accent text-accent'
                                : 'border-transparent text-secondary-text hover:text-primary-text'
                            }`}
                    >
                        口琴二三事
                    </button>
                </div>

                {/* Timeline Content */}
                <div className="max-w-4xl">
                    {activeTab === 'research' ? (
                        <Timeline items={researchTimeline} images={researchImages} />
                    ) : (
                        <Timeline items={harmonicaTimeline} images={harmonicaImages} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Highlights
