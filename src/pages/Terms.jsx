import { useState, useEffect } from "react";
import privacyImg from "../images/privacyImg.png";
const Terms = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="terms__heading">
        <div className="terms__heading-wrapper container">
          <h2 className="terms__heading-header">Terms and Condition</h2>
          <button className="terms__heading-button">Updated 15 Oct,2021</button>
        </div>
      </section>
      <section className="terms__content">
        <div className="terms__content__wrapper container">
          <div className="terms__content-scrollbar">
            <div className="terms__content-scrollbar-wrapper">
              <h4>Disclaimer</h4>
              <p>
                You should familiarize yourself with the things listed here.
                When you enter the website and its subdomains, you are accepting
                to abide by the stated terms and conditions. In case you are in
                a disagreement with them, then you should not enter the website.
              </p>
              <h4>Trademarks</h4>
              <p>
                Copies of the contents may be viewed and downloaded for your own
                personal non-commercial use, provided that any copy contains
                this Copyright/Disclaimer Notice. The contents may not otherwise
                be used in whole or in part in any manner without the prior
                written consent of NovaTradin. However, it is permissible to use
                the website contents for viewing and copying, but only if it is
                for private and not commercial usage. It is again, part of the
                rules you agree to follow by entering the website. Please note
                that any other usage of the contents found on NovaTradin is not
                allowed without permission.
              </p>
              <h4>Usage of information and other files</h4>
              <p>
                All of the information and rules contained on the website might
                be changed at some point in time. The usage of NovaTradin and
                its subpages with the purpose of misusing passwords, messing
                with the website`s system and misusage of materials is strictly
                forbidden. Note that some locations might not be able to access
                certain aspects of the website. NovaTradin saves its right to be
                the arbiter of determining access rights to the platform.
              </p>
              <h4>No warranty provided</h4>
              <p>
                All imagery, articles or other information mediums are provided
                ???as they are??? and are all part of the NovaTradin platform, but
                No name 1 is not liable for the correctness or consistency of
                the materials. Along with that,NovaTradin is not liable for any
                errors or misinterpretations that might be seen in the
                materials. We cannot give a guarantee regarding any of the
                imagery, texts or any other materials provided on the website.
                This is also true for the infringement of 3rd party rights or
                any other claims that might arise, be it due to wrongful
                information, malware or anything else.
              </p>
              <h4>Security/Securities</h4>
              <p>
                The word ???Security/Securities??? encapsulates every class of
                security, without regard about liquidity, commodities or
                financial exchange, options or whatever another financial asset
                might be associated.
              </p>
              <h4>3rd Party Data</h4>
              <p>
                Inside the website, there might be located some hyperlinks to
                other web pages, which in turn belong to a party or parties not
                related to NovaTradin . Therefore, NovaTradin is not liable for
                any offers, data or other kinds of information on the
                abovementioned webpages. Even if those links are on the No name
                1 website, it does not mean that we urge you to visit those
                pages or use any of their products or services. NovaTradin holds
                no liability towards any issues that might arise from going to
                those websites. Also, be warned that NovaTradin is not liable
                for the security level of those 3rd party websites and the terms
                and conditions of use will most likely be different. All of the
                data and information that is here is not strictly related to the
                given trading asset or goal, economic climate and does not have
                any relation whatsoever to a specific party. It serves simply as
                an informative piece and should not be thought of as
                encouragement for any action or anything close to that. Also, it
                does not in any way have the purpose of urging users to purchase
                or sell any assets. Even though we cannot ascertain that the
                information provided reflects truthful facts, it has been
                gathered from places which are reputable. You should not take
                this as final and complete information regarding the markets
                discussed on the platform. You should also not take the
                truthfulness of this information above your own personal
                decisions and judgment. NovaTradin is not obliged to contain the
                data from the website only on the platform and some of the
                things written here might be changed at some point without a
                necessary warning or notification. Be warned that investing can
                hide many risks and some of the assets can be very volatile.
                Therefore it might not be appropriate for everyone out there.
                Also, it is not guaranteed that you will be profitable in the
                future if you`ve been profitable in the past. NovaTradin is not
                responsible for any funds you lose or any other harm that might
                be done. It is strictly forbidden to copy or reproduce any of
                the contents written here without an exclusive permission. No
                name 1 is also not liable for any other parties that might be
                involved in a negative action against any of the users.
              </p>
              <h4>Constraint of the responsibility</h4>
              <p>
                NovaTradin will not be held liable for any harmful actions,
                damage or other negative events. This also includes damage done
                by a 3rd party and any other purposeful or non-purposeful harm.
                Financial and other losses related to using the platform, and
                anything harmful related to the platform, such as 3rd party
                misbehavior, malware, errors, malfunctions and anything else,
                will also not be accounted for byNovaTradin . This is true even
                if NovaTradin or its partners influenced the user in any way to
                make a harmful decision.
              </p>
              <h4>Information rights holder</h4>
              <p>
                NovaTradin reserves the right to utilize any idea, piece of
                information, instruction, strategy or other relevant data which
                is put on the platform by a user through the process of using
                the platform. This means that all of the information which a
                user submits throughout his use of the website is considered to
                belong to NovaTradin . NovaTradin will reveal any information
                only if there is an inquiry by a body of the law or if there is
                a mutual agreement with the requesting party. However, the
                abovementioned things do not mean that NovaTradin does not have
                any relation or duty towards its users regarding the user
                privacy terms.
              </p>
              <h4>Expiry of the profile</h4>
              <p>
                NovaTradin is entitled to take a monthly tax of $36 in case the
                user has not made a single trade for 30 days in a row. The
                purpose of this is to make sure that the profile is being used
                and has the necessary money on it. The fee will be charged as
                soon as the account inactivity reaches the 30 the day and will
                go on until the trading activity has been resumed. If there is
                less than $36 on the user profile, NovaTradin can use the
                available funds to cover the fee and then bring the account to
                closure.
              </p>
              <h4>Cancellation of the agreement</h4>
              <p>
                The relationship between NovaTradin and the user can be canceled
                by both sides, as long as it was presented as a written request
                and the other side was informed. In case of unpaid taxes or
                charges, open trades or anything of the kind, however, the
                request for cancellation might not be accepted. The cancellation
                will be done without any intolerance regarding any previous
                duties.
              </p>
              <h4>Distribution</h4>
              <p>
                The usage and redistribution of this website by any individuals,
                parties or organizations, who are in a situation which forbids
                access to the NovaTradin platform are also strictly forbidden.
                People entering the website from a place where the access is not
                allowed by law or any other restriction should exit the
                platform.
              </p>
              <h2>Bonus</h2>
              <p>
                The following rules are valid for any bonus or other credit is
                given to any user of the platform.By using the platform the user
                agrees to abide by those rules:
              </p>
              <ul>
                <li>
                  Only when all of the rules mention below are followed, is a
                  user eligible to get the bonus.
                </li>
                <li>
                  During the promotional timespan, users can only aim for one No
                  name 1 bonus.
                </li>
                <li>
                  Each account holder can only get the bonus once for the
                  duration of the promotion.
                </li>
                <li>
                  NovaTradin reserves the right to decide whether a user is
                  eligible to be granted a bonus or promotion offer.
                </li>
                <li>
                  The amount of a refund or a bonus shall not be more than the
                  amount of the initial deposit.
                </li>
                <li>
                  The withdrawal of money related to a bonus rely on the making
                  of $500 000 worth of trades in round turns for
                </li>
                <li>each $50 bonus offer granted.</li>
                <li>
                  In case a user who meets the conditions has not yet been
                  granted a bonus, please contact NovaTradin and we will fix the
                  issue.
                </li>
              </ul>
              <p>
                Along with the above-mentioned rules, some additional rules
                might arise regarding certain promotional offers. This is also
                stated in the terms and conditions regarding promotions and
                bonuses.
              </p>
              <p>
                We at NovaTradin look for many ways to provide a competitive and
                appealing incentive to ourtraders.
              </p>
              <p>
                Therefore every trader regardless of the account type that he or
                she opens is entitled to at least one bonus and/or incentive
                program.
              </p>
              <p>Now the Latest Promotion till the end of NovaTradin</p>
              <p>Protected Trades!</p>
              <table className="table-1">
                <thead>
                  <tr>
                    <th>Total Protected Trades</th>
                    <th>Minimum Deposit Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>100 trades</td>
                    <td>min deposit $ 3000</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>300 trades</td>
                    <td>min deposit $ 10000</td>
                  </tr>
                </tbody>
              </table>
              <p>
                This Promotions is especially created for investors that are
                taking their first steps in the currency trading industry.
              </p>
              <p>
                It will allow the investor to trade under conditions that are
                equal to those that have been trading for years and have been
                successful in doing so.
              </p>
              <p>
                It will teach you the proper money management behavior as
                performed by the professional successful traders.
              </p>
              <p>
                In addition you will be provided with the most exclusive the
                tool in the market that will teach you and show you how to spot
                real time trading opportunities in the market.
              </p>
              <p>WITH $ 0,00 RISK</p>
              <p>
                Interested? Ask your account manager to be included in the
                exclusive group of traders that have access to this amazing
                opportunity.
              </p>
              <p>Deposit Bonus!</p>
              <p>Per account we have different bonus options</p>
              <table className="table-2">
                <thead>
                  <tr>
                    <th>Total Protected Trades</th>
                    <th>Minimum Deposit Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Micro Account</td>
                    <td>Beginners 15%</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>Standard Account</td>
                    <td>Standard 25%</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>Silver Account</td>
                    <td>Premium 35%</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>Gold Account</td>
                    <td>Amazing 50%</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>VIP Account</td>
                    <td>Truly Amazing 100%</td>
                  </tr>
                </tbody>
              </table>
              <p>
                This offers count for the deposit bonus as well as for the
                rebate program where you as a trader are able to earn back part
                of the spreads.
              </p>
              <h1>BONUS Terms & Conditions</h1>
              <p>
                In order to withdraw your bonus plus indicial deposit you must
                execute a minimum trading volume of $20,000 for every bonus
                dollar. For example, if you receive a $100 bonus you will need
                to have a minimum trading volume of $2,000,000 in order to
                withdraw your bonusiFrom the date you receive your Bonus your
                trading volume will start counting towards the volume
                requirement for Bonus Withdrawal.
              </p>
              <p>
                Please note: you may withdraw funds from your account before
                reaching the minimum trading volume; however, by doing so, you
                forfeit the bonus amount.
              </p>
              <h2>Customer Trading Agreement</h2>
              <p>
                This agreement is made by the user and the NovaTradin platform,
                along with its partners and any other involved parties. The
                agreement concerns anything related to the parties and their
                relationship. Also, any additional terms, along with the
                Declaration of Beneficial Ownership, Risk Disclosure, and other
                related documentation, are included in this agreement.
              </p>
              <h2>1. General Terms</h2>
              <p>
                In relation to the availability of Securities available for
                trading at NovaTradin , some might be made available at certain
                points only. Direct engagement: NovaTradin and the user engage
                in this contract by their own free will, as individuals,
                entities or a related party. If this is not the case, it should
                be put into a written explanation.NovaTradin will not verify and
                accept any user actions which have not been approved and shared
                with beforehand. The user provides his consent to provide
                NovaTradin with any relevant information that might be
                requested. Margin: We`ve already stated that the usage of the
                platform might include some margined transactions, that might
                need the customer to put funds to meet the obligations stated in
                the agreement. There isn`t any solicitation: NovaTradin has
                never encouraged or suggested in any way and form that users
                should engage in any transactions or make a purchase of an
                asset. Also, NovaTradin is not liable for the same actions done
                by any 3rd parties related to the platform. Mistakes: There are
                many things that might result in an error in the quotation,
                along with 3rd parties and other things. NovaTradin keeps its
                privilege to make changes to an account balance if there happens
                to be a payment a mistake in the quotation. If there is a
                disagreement regarding such a mistake or change, it will be
                corrected according to the fair market price of the given asset
                at the time the mistake happened.
              </p>
              <p>
                Making Payments: the standard procedure is that any funds
                transferred by the user or a party related to or authorized by
                the user, and also any other payments and taxes charged from the
                user profile, will all go to the same account, which is the
                user`s trading profile. Note that there might be some extra
                charges applicable, up to $15 per transfer. However, prior to
                processing the payment, NovaTradin must verify that the person
                making the deposit is the real user of that account. In case
                this is not true, NovaTradin can decide to cancel the transfer.
                NovaTradin is not liable for any money not deposited straight to
                an account on the platform.
              </p>
              <p>
                Market volatilities: There are many things which are beyond No
                name 1 level of prediction and control, such as economic
                disruptions, war outbreak, global crisis, forces of nature and
                so on. Therefore the user agrees about the possibility for
                instant market disruptions which can result in loss of capital.
                NovaTradin has the privilege to stop or negate any transfer or
                place some restrictions in order, to terminate a user profile,
                all in case of unnatural or extraordinary market occurrences.
              </p>
              <p>
                Minimal trading length: Any investment which gets closed after 2
                minutes after it`s started will be considered to be scalping. No
                name 1 holds the privilege to nullify such investments without
                having to give any notice. Index investment: By using the
                platform, the user provides his confirmation of awareness
                regarding the Contract for Difference. It states that NovaTradin
                shall begin a trade as late as 5 minutes after the certain
                market has been opened. NovaTradin holds the privilege to deny a
                trade of a relevant asset within those 5 initial minutes.
                Also,NovaTradin can decide to terminate or not process any trade
                request during those 5 minutes.
              </p>
              <h2>2. Customer Orientation and Fulfillment of Orders</h2>
              <p>
                When a customer wants to start a trade, he might be given
                certain navigations by NovaTradin, be it in oral or written
                form. The navigation in written form might be sent by fax,
                phone, e-mail, formal request, it might be located somewhere on
                the platform or in any other informative digital medium. The
                regular oral means of providing users with information is on the
                phone or a personal notification. In such cases, NovaTradin
                might ask the user to write down the provided directions. The
                notification/order/instruction can be canceled only if
                NovaTradin agrees to it. NovaTradin has the right to change or
                give new directions to the user at any point in time.
              </p>
              <p>
                NovaTradin has the right to change or give new directions to the
                user at any point in time. Once NovaTradin contacts a user in
                order to provide instructive information, it is advised the user
                asks the other party to provide identification. The person
                contacting the user should be able to show an authorized
                signature in a written format. The user has the right to not
                accept the written notice, but it will only be valid if it is
                allowed in written form by NovaTradin. The truthfulness of all
                the information about the user`s personal details and is being
                sent online is up to the user to verify and confirm by himself.
                NovaTradin has to confirm or take action based on the provided
                information, in order for a mutual contract to be formed between
                the user and the platform. In case the user fails to provide
                directions to NovaTradin regarding an open position before the
                end of the trading day has come. NovaTradin has the right to
                move the pending trades to the following day. However, this is
                not a must and it`s up to NovaTradin to decide. If there is a
                trade that has been moved to the next trading day, the user will
                be charged with 0.01% of his profile balance. The charge will
                happen at midnight GMT, without any concern for discrepancies in
                the interest rates. The user does not pursue any liability or
                charges against NovaTradin in case of any funds loss or other
                error which resulted from the user`s neglect to inform about a
                denial of rights, any failure in communicating or following the
                guidelines provided online byNovaTradin. This also includes that
                the user should not pursue NovaTradin if the user did not seek
                further information or instructions fromNovaTradin regarding an
                issue, or any previous instructions or any actions whatsoever.
                NovaTradin is also not liable for any harm done by anyone
                impersonating the rightful owner of the account and using his
                personal information for any harmful or other activities.
              </p>
              <h2>
                3. Guidelines for making a withdrawal: A user can make a
                withdrawal of all the money on his account or any amount he
                wishes if he satisfies the criteria listed below:
              </h2>
              <p>
                NovaTradin has given you all the necessary papers and terms
                documentation. The appropriate documentation for making a
                withdrawal has been properly filled in, verified and given toNo
                name 1 via fax or mail and the required data has been properly
                put in. The user does not have any ongoing trades at NovaTradin.
                As soon as the abovementioned terms are met and Pipsswap accepts
                the request, the withdrawal will be processed and fulfilled in
                about 5 business days. Depending on the specifics of the user
                profile, the bank, the location of the recipient and his bank,
                and other relevant factors for making a money transfer, the
                periods for actually having the money transferred can differ. No
                name 1 is not responsible for any issues with the transfer which
                are related to or caused by other parties.
              </p>
              <p>
                Some extra transferal charges might be applied by parties who
                are part of the transaction process (i.e. intermediaries and
                middlemen) and the user agrees to that. NovaTradin also has a
                charge for withdrawing money. The proper terms are stated in the
                part for account funding and withdrawing funds. Also, the user
                confirms that there might be charges associated with currency
                conversion, in case it is necessary and depending on the
                currency that is being transferred and the currency of the
                account. The application for withdrawing money will be nullified
                in case it hasn`t met the described criteria 30 days after it
                has been made. If this happens, the user should re-send the
                application for withdrawing funds. Also, any application is
                bound to the abovementioned conditions and rules. Withdrawing
                funds: As a general rule, the withdrawal process should use the
                same schematics as the one the user used to put money in his
                profile. So if the user used a credit card in USD to fund his
                account, then the withdrawal should also be to the same credit
                card and in USD. It is possible that NovaTradin will not accept
                a certain transfer or an application for using other means for
                the transferal. In cases when the customer wants to use another
                withdrawal method he should start a new withdrawal procedure and
                provide the proper documents. The user confirms that the money
                being transferred can only be sent to him and no other party
                than the rightful holder of the account, abiding by the Anti
                Money Laundering Regulations. In some cases, NovaTradin might
                ask for further information regarding the source of the money
                and the recipient.
              </p>
              <h2>Customer Statement</h2>
              <p>The customer states that:</p>
              <p>
                terms and conditions stated on the website. He is aware that
                investing in financial assets has its dangers and can be
                affected by many economic factors and market variables. This
                might result in financial losses which are bigger than what the
                user was initially prepared to risk. The user also concurs that
                he accepts the risk of losing the money he transfers to No name
                1. The user agrees that he is not under any restriction of the
                law or any binding contract, which is in a disagreement or
                prevents him from using the NovaTradin platform.
              </p>
              <p>
                That the user has every legal right and permission to accept and
                be part of this statement. The user also agrees, if he
                represents a business or another entity, that all permissions
                have been obtained and he has the legal right and authority to
                be its representative in front of NovaTradin. Matter of the
                agreement: all funds transfers that have been canceled for the
                purpose of maintaining the security margin will be and will stay
                free. The user is clear regarding all matters of the law, along
                with all taxation laws, registration processes and other legal
                matters that might apply. The user agrees that all information
                given by NovaTradin is correct and rightful and has not caused
                any misinterpretation by the user or ushered him towards any
                particular actions. Regarding the offers, the user is aware that
                a compensation plan might not necessarily yield any advantage or
                profit, due to the unpredictability of the economic conditions
                and markets.
              </p>
              <h2>Leeway/Marginal Requirements</h2>
              <p>
                For us to fulfill the user`s safety leeway and any positive
                balance on his profile, the user should confirm and send the
                respective amount in the currency required by NovaTradin. Prior
                to executing a trade, NovaTradindoes not have to make sure that
                the user has the necessary safety leeway. Also, if NovaTradin
                does not succeed in ensuring the necessary funds for the
                outstanding safety leeway before starting a trade, it does not
                mean that the user`s dues have gone down. Any money sent toNo
                name 1 by the user can be used to cover any dues owed by the
                user or parties associated with him. Also, NovaTradin is not
                obliged to inform the user about any income generated for No
                name 1 by the user`s activities. All funds that the user owes as
                a result of a commitment to another party will be quickly
                resolved by the user, according to the conditions in the
                agreement and along with any guidelines which NovaTradin has
                imposed in order to be able to perform its duties under such an
                agreement. NovaTradin does not necessarily have to, but on some
                occasions, it might exchange user funds into a different
                currency, at a rate favorable for the platform in order to cover
                some user liabilities or credits. NovaTradin can start or end
                any trades without having to inform the user before that and
                cover any user obligations towards the platform if the user does
                not succeed in covering the obligations himself. Also,
                NovaTradin holds the privilege to give back and money without
                having to explain the basis for the return.
              </p>
              <h2>Spread Rate, Margin, and Leverage</h2>
              <p>
                NovaTradin can change the safety margin terms depending on the
                number of the user`s trades, transfers and economic climate
                (including but not only depending on bad liquidity and
                volatility). Other criteria might also apply. NovaTradin also
                has the privilege to make changes to the spread rate depending
                on the user`s safety margin and trades. The user should take
                care of checking his profile activities and safety margin by
                himself. Those specifications can be given out by NovaTradin
                after the user makes a request on the platform.
              </p>
              <h2>Right of Commitment, Claim, Set-Off, and Withholding</h2>
              <p>
                If NovaTradin deems it necessary, it has the right to put
                together different user accounts, cancel out the available funds
                of any user profiles or cancel out each profile`s balance
                separately, without any focus on the specifics of the profile.
                NovaTradin has the right of commitment and claim, along with a
                right of withholding assets under the user`s name, along with
                other assets or deposits of some kind made to NovaTradin,
                regardless of any specifics such as maturity dates, currencies
                and so on.
              </p>
              <h2>1. Default</h2>
              <p>
                NovaTradin has the privilege to partially or fully end any trade
                of any user, without having to inform him beforehand, given that
                any of the following circumstances have been met:
              </p>
              <p>
                If the user doesn`t succeed in meeting a payment obligation in a
                timely manner. If the user doesn`t meet the terms of this
                agreement or doesn`t comply, be it partially or fully with any
                of the arrangements stated here. If the user has another profile
                at NovaTradin, in order to gain an unfair trading advantage. If
                the user has mental health issues, is said to be missing or
                deceased. If the user declares bankruptcy, be it as an
                individual or as an official representative of an entity or a
                business or he acts based upon any law regarding insolvency or
                bankruptcy, including but not limited to the seeking of a
                trustee or other negotiating parties related to the wholesome
                liquidation process. If the user performs a bank card takeback.
                Then the user`s account will be put on hold and every open trade
                will be closed as seen fit by NovaTradin when the end of the
                business day comes. If a body of the law makes a formal request
                for the closure of a position, be it by the user himself or by
                NovaTradin. If NovaTradin decides that it is of importance for
                the safety of platform and its partners. NovaTradin holds the
                privilege to end every single or any number of open trades the
                client holds, in case the outcome of the trades goes over the
                appropriate safety margin. If there is any doubt that the user
                has taken part of, or initiated anything that might be
                considered as illegal activity or an act of inappropriate kind
                regarding the trading activities, including a breach of any
                trading terms and conditions, regardless if they`re about the
                timing of an investment or it`s about an investment started by
                error, with wrong pricing or asset.
              </p>
              <h2>2. Online Trading</h2>
              <p>
                NovaTradin is not responsible for any harm, accidents, financial
                losses or any other unfavorable events that might be in some way
                the cause of issues related to bad communication due computer
                system malfunctioning or anything of the kind, be it from the
                side of NovaTradin or the user and regardless of the
                circumstances and trades being made at the time.
              </p>
              <h2>3. Keeping a record of Conversations</h2>
              <p>
                NovaTradin might keep track of any correspondence with other
                parties related to the platform, be it a user or another related
                instance. The user agrees that NovaTradin can record the
                correspondence for use and reference in case of any future
                issues regarding the user. Also, the recorded conversations
                belong rightfully to the platform. Also,NovaTradin has the
                complete right to use the recording as it sees fit, including to
                delete them.
              </p>
              <h2>4. Changes to the Contract</h2>
              <p>
                This contract can only be changed or canceled with a written
                permission from the appropriate NovaTradin employee. A
                NovaTradin client support employee does not have the authority
                to make any changes to this agreement. The user also agrees that
                NovaTradin might make changes to the contract and will inform
                the user via email or platform notification. The client
                expresses his agreement regarding the changed conditions by
                continuing to use the platform.
              </p>
              <h2>5. Area of Authority</h2>
              <p>
                The stated terms shall be understood according to the laws of
                the Republic of NovaTradin. The client accepts to comply with
                the area of authority of the NovaTradin regarding any issues and
                matters of the law regarding the agreement and all terms stated
                on NovaTradin. All parties concur that the NovaTradin for the
                International Sale of goods is not valid and applicable.
              </p>
              <h2>Spreads</h2>
              <p>
                The stated terms shall be understood according to the laws ofNo
                name 1. The client accepts to comply with the area of authority
                of NovaTradin regarding any issues and matters of the law
                regarding the agreement and all terms stated on NovaTradin. All
                parties concur that theNovaTradin is not valid and applicable.
              </p>
              <p>About every major pair, the spread goes low to 1 pip.</p>
              <p>The abundance of more than 50 currency pairs.</p>
              <p>20 worldwide tradable indices.</p>
              <p>International equity/stock.</p>
              <p>
                Various methods for pricing based on the user`s circumstances.
              </p>
              <p>Fractional pips pricing.</p>
              <p>Procedure for returning funds</p>
              <p>
                If there is a situation where the user`s funds should be
                returned, the money will be transferred to his account in two
                working days. Depending on the method used for transferring the
                money, the time it takes for the process to be completed might
                vary. Each refund application will be reviewed and confirmed by
                NovaTradin after the user presents the proper documentation. No
                name 1 will do what it can do offer assistance and resolve the
                issue.
              </p>
            </div>
          </div>
          <div className="terms__content-btn">
            <button className="tc__decline">Decline</button>
            <button className="tc__agree">Agree</button>
          </div>
        </div>
      </section>
      <section className="privacy container">
        <div className="privacy__content">
          <div className="privacy__info">
            <h2>Privacy Policy</h2>
            <p>
              Noname1 takes the privacy of its users very seriously. We are
              aware that keeping our treasured clients` private information is
              vital and have made the trustworthiness and security of the
              platform into one of our top priorities.
            </p>
            <p>
              We advise you to familiarize yourself with our privacy protocol
              and let us know in case you have any inquiries. The arrangements
              stated in this protocol are applicable to current and previous
              users as well.
            </p>
          </div>
          <div className="privacy-img">
            <img src={privacyImg} alt="logo" />
          </div>
        </div>
        <div className="privacy__button">
          <div className="privacy__button-learn" onClick={() => setOpen(true)}>
            Learn more about Privacy
          </div>
          <div className="privacy__button-btns">
            <button className="cancel-btn">Cancel</button>
            <button className="agree-btn">Confirm</button>
          </div>
        </div>
        <div
          className={
            open ? "privacy__scrollbar" : "privacy__scrollbar has-fade"
          }
        >
          <div className="closeBtn" onClick={() => setOpen(false)}>
            <span></span>
            <span></span>
          </div>
          <div className="privacy__scrollbar-info">
            <h2>1. Private information.</h2>
            <p>
              At the time activating of your profile at Pipsswap, we would
              request that you share the necessary personal info, in order to
              provide you the optimum trading experience. We need the info to
              make the necessary transfers and trades, to determine your
              financial scope, to handle any forgotten password issues, make
              customer care easier and let you know about any Forex related
              matter that might concert you. We are also obliged by the law to
              keep proper records.
            </p>
            <h2>
              2. We might request that you share the following thing with us:
            </h2>
            <p>
              In order to apply: your name, DOB, a form of identification or
              social security, proper address. We might also need to make sure
              of your occupation, financial status, and more relevant
              information, as described during the process of creating a
              profile. In order to make transfer funds ??? statements or copies of
              previous correspondence and details about your transfers with
              Pipsswap or its partners, along with any trading actions,
              financial statements, previously asked questions and the
              respective answers.
            </p>
            <p>
              For authentication purposes ??? we might need certain documents for
              making sure that the information represents the real person (some
              form of personal identification) and also bank statements, utility
              statements, bank card information and so on. Attention: Pipsswap
              is obliged by the AML and the USA Patriot Act to gather any data
              if there is a need and act accordingly to verify a user`s
              identification. Attention: Pipsswap wants to clarify that it does
              not purposefully keep or gather any information of any individuals
              under the age of thirteen. If it comes to the knowledge of
              Pipsswap that information has been collected from a person under
              the age of thirteen, then the appropriate measures will be taken
              to erase that information.
            </p>
            <p>
              Please, if any parents or attendants of children learn that their
              child has submitted private/personal information with no
              permission, write us immediately.
            </p>
            <h2>3. Utilization of cookies</h2>
            <p>
              Some information is being transmitted from the platform`s server
              to the user`s browser and kept on the user`s device. This is
              referred to as cookies. Pipsswap gathers necessary data by using
              the cookies. Don`t worry, as cookies don`t have any private
              information regarding the user in them, with the exception when
              the user has provided such information by himself ??? like when
              opening a profile at a website. Pipsswap will utilize the cookies
              for the purpose of identifying and quantifying platform traffic,
              along with measuring how certain services and ads are performing.
              This way Pipsswap can better gauge the ways in which the users are
              utilizing the platform, and make enhancements to the performance
              of the website. Additionality, it lets us know what kind of
              relevant materials and information we should provide to you.
            </p>
            <p>
              The collected data might also be made available to Pipsswap staff,
              partners, and associates. Pacoxr will not use the information for
              commercial purposes by providing it to any unassociated
              individuals or entities. When the user goes to Pipsswap, there
              might be other affiliated parties that also place their cookies on
              the user`s computer. We would advise you to take a look at the
              terms and conditions of those affiliate parties` websites in case
              you have any questions or issues regarding their placement of
              cookies. Usually, the usage of cookies is the same as on Pipsswap.
            </p>
            <h2>4. Disclosure information.</h2>
            <p>
              Some information might be disclosed fully or partially with our
              trusted partners. The purpose of this is to be able to let
              customers know of any new offers or functionalities, along with
              providing assistance with user profiles. The partners consist of
              partiers related to the platform, who are usually stakeholders of
              some kind. The confidentiality of your private data will be kept
              by our partners as it is being kept by Pipsswap, following the
              privacy terms and conditions stated on the platform.
            </p>
            <h2>5. Other Parties.</h2>
            <p>
              With the exception of the parties stated in the privacy protocol,
              Pipsswap will not share your data with any other parties.
              Sometimes we might give information to non-associated firms
              responsible for performing maintenance on the user`s profile. This
              includes parties that take care of the fund`s transfer process at
              Pacoxr. Additionally, it might include firms responsible for any
              legal and financial matters at Pipsswap. Any party which is not a
              direct association to Pipsswap should keep the provided user data
              to the same degree in which it is received. The non-associate
              party can only utilize the given user data in order to provide the
              specified service and for no other reasons. In some cases,
              Pipsswap might give out a clients` private data to another party
              given that there are certain instructions that need to be
              accomplished. Know that Pipsswap would never use your information
              as a source of revenue and give it in exchange for money. In case
              of any requests and control by bodies of the law, Pipsswap might
              share private user data given to other parties. The shared
              information might contain private specifics in order to meet the
              requirements of the law, as well as securing the rights and
              integrity of the platform.
            </p>
            <h2>6. Consolidation and insolvency.</h2>
            <p>
              All private client data will be consolidated following the
              platform, in case there is a merger of Pipsswap. Stated in the
              inclusion terms and the obligations for keeping records, there are
              going to be different procedures in case of insolvency.
            </p>
            <h2>7. Payment details.</h2>
            <p>
              Pipsswap does not hold any data related to client`s credit card
              information and details. In case you`re asked to give a copy of
              your bank card, you should only provide the ending 4 digits of the
              card number, without giving out the CVC which can be found on the
              back of the card.
            </p>
            <h2>8. Inability/Unwillingness to share private data.</h2>
            <p>
              You can choose if you want to share the necessary information with
              Pipsswap. Be mindful though, that any info you omit might lead to
              issues with your trading profile. It might also have an impact on
              the services we`re able to offer you.
            </p>
            <h2>9. Pulling out.</h2>
            <p>
              If you wish for Pipsswap to delete all your private information
              from the platform and the servers, you will need to send us a
              detailed message. Know that any omitted data might result in
              issues with your profile and consequently lead to inadequacy with
              the platform services.
            </p>
            <h2>10. Corrections.</h2>
            <p>
              If any corrections are made, which change the policies and
              protocol for private data gathered by Pipsswap, the clients will
              be promptly informed about it. The client has the right to decide
              whether his private data will be used in a certain way. Any other
              change or correction which is not related to a client`s private
              data will be posted on the platform.
            </p>
            <h2>11. Mailing info.</h2>
            <p>
              In case you have any inquiries regarding the privacy protocol or
              something related to the platform, please feel free to contact us
              at any time. You can send us an e-mail, call us or fax us. There
              is always a dedicated Pacoxr employee to answer your questions.
            </p>
            <p>Phone:</p>
            <p>Email:</p>
          </div>
        </div>
      </section>
    </>
  );
};
export default Terms;
