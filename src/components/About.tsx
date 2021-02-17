import styled from 'styled-components';

const Div = styled.div`
	color: #575757;
	text-align: center;
`;

const CenterDiv = styled.div`
	display: inline-block;
	text-align: left;
	width: min(1024px, 80vw);
	box-sizing: border-box;
	font-size: min(24px, 3.75vw);
`;

const H1 = styled.h1`
	font-size: min(36px, 7vw);
`;

const H2 = styled.h2`
	font-size: min(28px, 5vw);
	margin-top: 4px;
	margin-bottom: 4px;
`;

const P = styled.p`
	font-size: min(24px, 5vw);
	margin-top: 4px;
	margin-bottom: 40px;
`;

const Table = styled.table`
	display: block;
	overflow-x: auto;
	white-space: nowrap;
	-webkit-overflow-scrolling: touch;
`;

export const About: React.FC = () => {
	return (
		<Div>
			<CenterDiv>
				<H1>使ったことのある言語</H1>
				<Table>
					<tr>
						<th>言語</th>
						<th>得意</th>
						<th>好き</th>
						<th>入門時期</th>
						<th>代表作</th>
					</tr>
					<tr>
						<td width="160">C++</td>
						<td width="160">★★★★☆</td>
						<td width="160">♥♥♥♥♡</td>
						<td width="160">2015年頃</td>
						<td width="160"><a href="https://github.com/wakewakame/GravityDesktop2">GitHub</a></td>
					</tr>
					<tr>
						<td>JavaScript</td>
						<td>★★★★☆</td>
						<td>♥♡♡♡♡</td>
						<td>2015年頃</td>
						<td><a href="https://github.com/wakewakame/HydrangeaJS">GitHub</a></td>
					</tr>
					<tr>
						<td>Python</td>
						<td>★★★☆☆</td>
						<td>♥♥♡♡♡</td>
						<td>2015年頃</td>
						<td></td>
					</tr>
					<tr>
						<td>Java</td>
						<td>★★★☆☆</td>
						<td>♥♥♥♡♡</td>
						<td>2017年頃</td>
						<td></td>
					</tr>
					<tr>
						<td>C#</td>
						<td>★★★☆☆</td>
						<td>♥♥♥♡♡</td>
						<td>2018年頃</td>
						<td><a href="https://github.com/wakewakame/Pooop">GitHub</a></td>
					</tr>
					<tr>
						<td>Rust</td>
						<td>★★☆☆☆</td>
						<td>♥♥♥♥♥</td>
						<td>2020年頃</td>
						<td><a href="https://github.com/wakewakame/REye">GitHub</a></td>
					</tr>
				</Table>
				<br/>
				<Table>
					<th><td width="160">得意度の目安</td><td></td></th>
					<tr><td>★☆☆☆☆</td><td>入門段階</td></tr>
					<tr><td>★★☆☆☆</td><td>基本文法は理解している</td></tr>
					<tr><td>★★★☆☆</td><td>その言語の作法がなんとなくわかる</td></tr>
					<tr><td>★★★★☆</td><td>その言語を用いて中規模なプログラムを書いたことがある</td></tr>
					<tr><td>★★★★★</td><td>その言語を用いて大規模なプログラムを書いたことがある</td></tr>
				</Table>
				<br/>

				<H1>使ったことのあるOSやソフト、ツール</H1>
				<Table>
					<tr>
						<th>名称</th>
						<th>備考</th>
					</tr>
					<tr>
						<td width="160">Linux</td>
						<td>journalctlなどを用いて簡単な問題の解決ができる</td>
					</tr>
					<tr>
						<td>Git</td>
						<td>branchやsubmoduleはよく使う</td>
					</tr>
					<tr>
						<td>Visual Studio</td>
						<td>デバッガの使い方がある程度わかる</td>
					</tr>
					<tr>
						<td>CMake</td>
						<td>C++の依存ライブラリをCMakeで管理したことがある</td>
					</tr>
					<tr>
						<td>Vim</td>
						<td>Vimだけで中規模な開発ができる</td>
					</tr>
					<tr>
						<td>SQLite</td>
						<td>テーブルの作成や検索ができる</td>
					</tr>
					<tr>
						<td>Nginx</td>
						<td>httpsへの対応やリバースプロキシの設定をしたことがある</td>
					</tr>
					<tr>
						<td>Unity</td>
						<td>簡単なゲーム程度であれば作れる</td>
					</tr>
				</Table>
				<br/>

				<H1>経歴</H1>
				<ul>
					<li>
						<H2>1999年</H2>
						<P>富山県に生まれる。</P>
					</li>
					<li>
						<H2>2008年 (小学4年)</H2>
						<P>
							プログラミングに興味を持つ。<br/>
							HSPというプログラミング言語の入門書を父に買ってもらう。
						</P>
					</li>
					<li>
						<H2>2009年～2014年 (小学5年～高校1年)</H2>
						<P>
							作りたいものをHSPでひたすら作っていた。<br/>
							制作物の大半は簡単なゲームやデジタルアートのようなものだった。<br/>
							HSPのおかげでWin32 APIに少し詳しくなった。
						</P>
					</li>
					<li>
						<H2>2015年 (高校2年)</H2>
						<P>
							HSPの処理速度に限界を感じ始め、C言語に入門し始める。<br/>
							同時に、ニコニコ生放送でプログラミング配信を行うようになる。<br/>
							<br/>
							配信ではプログラマーの視聴者も多く、様々な知識やツールを教えてもらった。
							(デバッグの方法やGitコマンドの使い方など)
						</P>
					</li>
					<li>
						<H2>2016年 (高校3年)</H2>
						<P>
							openFrameworksというC++のフレームワークを使うのにハマる。
							このフレームワークではたった数行のコードで基本的な図形や文字などを描画できる。
						</P>
					</li>
					<li>
						<H2>2017年 (大学1年)</H2>
						<P>
							VSTと呼ばれる作曲ソフトの楽器プラグインの開発に挑戦する。<br/>
							VSTのGUIにopenFrameworksを使えないか試行錯誤したが、泥臭い方法しか見つからなかった。
							そのため、openFrameworksに似せたOpenGLベースの独自フレームワークを開発した。
							(<a href="https://github.com/wakewakame/NodeUI">NodeUI</a>)<br/>
							<br/>
							また、デスクトップのアイコンが落下するジョークソフトなども作った。
							(<a href="https://github.com/wakewakame/GravityDesktop">GravityDesktop</a>)<br/>
							このプログラムも最初はOpenGLで作成していたが、
							デスクトップのキャプチャデータがDirectXのテクスチャとして取得されるため、
							結局DirectXで作り直すことになった。
							このプログラムは人生でTop3に入る自信作である。
						</P>
					</li>
					<li>
						<H2>2018年 (大学2年)</H2>
						<P>
							C++でできることの多さからC++の沼にどんどん浸かっていく。<br/>
							もはや自分に作れないものは無いのではないかという謎の自信があった。<br/>
							<br/>
							また、そのとき丁度モーショングラフィックスに特化した動画編集ソフトが欲しかったため、
							JUCEとFFmpegを使って動画編集ソフトの開発を始めた。
							しかし、MPEGやAV1などに用いられる差分圧縮の性質上、動画の逆再生機能の実装が非常に難しかった。
							また、図形の制御などはJavaScriptで行いたかったので、GoogleのV8を組み込もうとした。
							しかし、V8はそもそもコンパイルすら通すことができなかった。
							そんなこんなで問題が山積みとなり、結局開発は挫折してしまった。<br/>
							<br/>
							とはいえ、いい経験にはなったと思う。<br/>
							いつかまた挑戦したいと思っている。
						</P>
					</li>
					<li>
						<H2>2019年 (大学3年)</H2>
						<P>
							通常、研究室に配属されるのは4年生からである。
							しかし、教授のご厚意で私は研究の手伝いをさせてもらえることになった。
							研究の内容は歩行者の行動分析である。
							歩行者の姿勢推定をするためにOpenPoseというC++のライブラリを使っていた。
							私はこのライブラリを使うための雛形環境を作成したり、
							解析結果をSQLite形式のファイルとして保存できるようにしたりなど、
							いろいろプログラムを書くこととなった。<br/>
							(<a href="https://github.com/wakewakame/openpose_ext">OpenPoseの雛形</a>)<br/>
							<br/>
							また、私は同時に趣味で音声処理を行うノードエディタも開発していた。
							これを作っていた理由はVST(楽器のプラグイン)を探すのが面倒であったためである。
							まず、私はReaperという無料の作曲ソフトで作曲をしようとしていた。
							しかし無料であるが故にVSTは全て自分で集めてくる必要がある。
							無料のVSTをまとめて紹介しているサイトもあるが、高々10個程度である。
							しかも1つずつダウンロードするのも面倒臭い。
							そのため、私は1つのVST上で別の楽器管理システムを構築すればよいのではないかと考えた。
							ちょうどUnityのアセットストアのように、
							ブラウザ上で「追加」を押すだけでダウンロードせずとも楽器が追加できるような仕組みである。
							また、そのサイトには誰でも楽器を作成、投稿することができ、カテゴリやランキング順で検索することもできる。
							そのため、これまでのようにわざわざ独自のVST配布サイトを巡回する必要もないし、
							ダウンロードやインストールなどの手間な作業も省ける。
							<br/>
							私はその第一歩として、ノードベースで楽器を作成できる仕組みを開発した。
							(<a href="https://github.com/wakewakame/AudioNode">AudioNode</a>)
							<br/>
							このプログラムも人生でTop3に入る自信作である。
						</P>
					</li>
					<li>
						<H2>2020年 (大学3年 留年)</H2>
						<P>
							大学1年の後期と2年の後期、プログラムに熱中するあまり深夜まで作業をしていることが多かった。
							そのため、寝坊や欠席が重なり単位を多く落とした。
							結果として、3年から4年への進級条件を満たすことができず、留年をすることとなった。
							<br/>
							<br/>
							大学3年は2年間とも何事もなかったため、無事進級することができた。
						</P>
					</li>
				</ul>
			</CenterDiv>
		</Div>
	);
};
