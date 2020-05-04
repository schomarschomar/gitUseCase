

require([

    'underscore',

    'jquery',

    'splunkjs/mvc',

    'splunkjs/mvc/simplexml/ready!'

], function(_, $, mvc) {

 

 

               var issuer_6_Input                     = $('[name="Issuer_6"]');

               var doc_type_Input                     = $('[name="DocumentType"]');

               var applicableLaw_Input                = $('[name="ApplicableLaw"]');

               var automaticExercise_Input            = $('[name="AutomaticExercise"]');

               var cBFAccountNumber_Input             = $('[name="CBFAccountNumber"]');

               var commentField_Input                 = $('[name="CommentField"]');

               var coupon_Input                       = $('[name="Coupon"]');

               var couponDenomination_Input           = $('[name="CouponDenomination"]');

               var currency_Input                     = $('[name="Currency"]');

               var denomination_Input                 = $('[name="Denomination"]');

               var distributionCurrency_Input         = $('[name="DistributionCurrency"]');

               var emptyField_Input                   = $('[name="EmptyField"]');

               var endOfExercisePeriod_Input          = $('[name="EndOfExercisePeriod"]');

               var exceptionInterestCalculation_Input = $('[name="ExceptionInterestCalculation"]');

               var exerciseAgent_Input                = $('[name="ExerciseAgent"]');

               var expiry_Input                       = $('[name="Expiry"]');

               var firstCoupon_Input                  = $('[name="FirstCoupon"]');

               var floaterFrom_Input                  = $('[name="FloaterFrom"]');

               var globalNoteNumber_Input             = $('[name="GlobalNoteNumber"]');

               var globalNotesLanguage_Input          = $('[name="GlobalNotesLanguage"]');

               var iSIN_Input                         = $('[name="ISIN"]');

              var increment_Input                    = $('[name="Increment"]');

               var instrumentType_Input               = $('[name="InstrumentType"]');

               var interestCycle_Input                = $('[name="InterestCycle"]');

               var interestPaymentType_Input          = $('[name="InterestPaymentType"]');

               var interestPeriodFrom_Input           = $('[name="InterestPeriodFrom"]');

               var interestPeriodTo_Input             = $('[name="InterestPeriodTo"]');

               var interestRate_Input                 = $('[name="InterestRate"]');

               var issuer_Input                       = $('[name="Issuer"]');

               var issuingAmount_Input                = $('[name="IssuingAmount"]');

               var lastCoupon_Input                   = $('[name="LastCoupon"]');

               var launchDate_Input                   = $('[name="LaunchDate"]');

               var listing_Input                      = $('[name="Listing"]');

               var maturityDate_Input                 = $('[name="MaturityDate"]');

               var minExercise_Input                  = $('[name="MinExercise"]');

               var minTransferableAmount_Input        = $('[name="MinTransferableAmount"]');

               var minimumAmount_Input                = $('[name="MinimumAmount"]');

               var numberOfShares_Input               = $('[name="NumberOfShares"]');

               var numberReleased_Input               = $('[name="NumberReleased"]');

               var offeringType_Input                 = $('[name="OfferingType"]');

               var orderNumber_Input                  = $('[name="OrderNumber"]');

               var orderType_Input                    = $('[name="OrderType"]');

               var payingAgent_Input                  = $('[name="PayingAgent"]');

               var paymentOrShares_Input              = $('[name="PaymentOrShares"]');

               var productName_Input                  = $('[name="ProductName"]');

               var qualifier_Input                    = $('[name="Qualifier"]');

               var quote_Input                        = $('[name="Quote"]');

               var redemptionModality_Input           = $('[name="RedemptionModality"]');

               var redemptionTo_Input                 = $('[name="RedemptionTo"]');

               var redemptionType_Input               = $('[name="RedemptionType"]');

               var referenceDay_Input                 = $('[name="ReferenceDay"]');

               var secondCoupon_Input                 = $('[name="SecondCoupon"]');

               var securitisationType_Input           = $('[name="SecuritisationType"]');

               var securityType_Input                 = $('[name="SecurityType"]');

               var startOfExercisePeriod_Input        = $('[name="StartOfExercisePeriod"]');

               var tefraDBondFrom_Input               = $('[name="TefraDBondFrom"]');

               var tefraDBondTo_Input                 = $('[name="TefraDBondTo"]');

               var type_Input                         = $('[name="Type"]');

               var underlying_Input                   = $('[name="Underlying"]');

               var valueDate_Input                    = $('[name="ValueDate"]');

               var wKN_Input                          = $('[name="WKN"]');

               var xemacParticipant_Input             = $('[name="XemacParticipant"]');

               var xemacSystemClaimNumber_Input       = $('[name="XemacSystemClaimNumber"]');

               var _key_Input                         = $('[name="_key"]');

 

               var doc_type_Val,

                   applicableLaw_Val,

                   automaticExercise_Val,

                   cBFAccountNumber_Val,

                   commentField_Val,

                   coupon_Val,

                   couponDenomination_Val,

                   currency_Val,

                   denomination_Val,

                   distributionCurrency_Val,

                   emptyField_Val,

                   endOfExercisePeriod_Val,

                   exceptionInterestCalculation_Val,

                   exerciseAgent_Val,

                   expiry_Val,

                   firstCoupon_Val,

                   floaterFrom_Val,               

                   globalNoteNumber_Val,

                   globalNotesLanguage_Val,

                   iSIN_Val,

                   increment_Val,

                   instrumentType_Val,

                   interestCycle_Val,

                   interestPaymentType_Val,

                   interestPeriodFrom_Val,

                   interestPeriodTo_Val,

                   interestRate_Val,

                   issuer_Val,

                   issuingAmount_Val,

                   lastCoupon_Val,

                   launchDate_Val,

                   listing_Val,

                   maturityDate_Val,

                   minExercise_Val,

                   minTransferableAmount_Val,

                   minimumAmount_Val,

                   numberOfShares_Val,        

                   numberReleased_Val,

                   offeringType_Val,

                   orderNumber_Val,

                   orderType_Val,

                   payingAgent_Val,

                   paymentOrShares_Val,

                   productName_Val,

                   qualifier_Val,

                   quote_Val,

                   redemptionModality_Val,

                   redemptionTo_Val,

                   redemptionType_Val,

                   referenceDay_Val,

                   secondCoupon_Val,

                   securitisationType_Val,

                   securityType_Val,          

                   startOfExercisePeriod_Val, 

                   tefraDBondFrom_Val,

                   tefraDBondTo_Val,

                   type_Val,

                   underlying_Val,

                   valueDate_Val,

                   wKN_Val,

                   xemacParticipant_Val,      

                   xemacSystemClaimNumber_Val,

                   _key_Val;    

                

                

 

 

                var requiredAttributeTable  = mvc.Components.get('requiredAttributeTable');

                var tokens                  = mvc.Components.get('submitted');

                var updateSearch            = mvc.Components.get('updateSearch');

                var createSearch            = mvc.Components.get('createSearch');

                var deleteSearch            = mvc.Components.get('deleteSearch');

                var requiredAttributeSearch = mvc.Components.get('requiredAttributeSearch');

                var requiredAttributeTable  = mvc.Components.get('requiredAttributeTable');

 

 

               

 

                    requiredAttributeTable.on('click', function(e) {

 

 

                       e.preventDefault();

                       console.log('e: ', e);

    

                               if(e['field'] === 'Update') {

                               

                                               /* --- Pull values from the current table row --- */

                              

                                                              issuer_6_Val                     = e.data['row.Issuer_6'];

                                                              doc_type_Val                     = e.data['row.DocumentType'];

                                                              applicableLaw_Val                = e.data['row._req_ApplicableLaw'];

                                                              automaticExercise_Val            = e.data['row._req_AutomaticExercise'];

                                                              cBFAccountNumber_Val             = e.data['row._req_CBFAccountNumber'];

                                                              commentField_Val                 = e.data['row._req_CommentField'];

                                                              coupon_Val                       = e.data['row._req_Coupon'];

                                                              couponDenomination_Val           = e.data['row._req_CouponDenomination'];

                                                              currency_Val                     = e.data['row._req_Currency'];

                                                              denomination_Val                 = e.data['row._req_Denomination'];

                                                              distributionCurrency_Val         = e.data['row._req_DistributionCurrency'];

                                                              emptyField_Val                   = e.data['row._req_EmptyField'];

                                                              endOfExercisePeriod_Val          = e.data['row._req_EndOfExercisePeriod'];

                                                              exceptionInterestCalculation_Val = e.data['row._req_ExceptionInterestCalculation'];

                                                              exerciseAgent_Val                = e.data['row._req_ExerciseAgent'];

                                                              expiry_Val                       = e.data['row._req_Expiry'];

                                                             firstCoupon_Val                  = e.data['row._req_FirstCoupon'];

                                                              floaterFrom_Val                  = e.data['row._req_FloaterFrom'];

                                                              globalNotesLanguage_Val          = e.data['row._req_GlobalNotesLanguage'];

                                                              globalNoteNumber_Val             = e.data['row._req_GlobalNoteNumber'];

                                                              iSIN_Val                         = e.data['row._req_ISIN'];

                                                              increment_Val                    = e.data['row._req_Increment'];

                                                              instrumentType_Val               = e.data['row._req_InstrumentType'];

                                                              interestCycle_Val                = e.data['row._req_InterestCycle'];

                                                              interestPaymentType_Val          = e.data['row._req_InterestPaymentType'];

                                                              interestPeriodFrom_Val           = e.data['row._req_InterestPeriodFrom'];

                                                              interestPeriodTo_Val             = e.data['row._req_InterestPeriodTo'];

                                                              interestRate_Val                 = e.data['row._req_InterestRate'];

                                                              issuer_Val                       = e.data['row._req_Issuer'];

                                                              issuingAmount_Val                = e.data['row._req_IssuingAmount'];

                                                              lastCoupon_Val                   = e.data['row._req_LastCoupon'];

                                                              launchDate_Val                   = e.data['row._req_LaunchDate'];

                                                              listing_Val                      = e.data['row._req_Listing'];

                                                              maturityDate_Val                 = e.data['row._req_MaturityDate'];

                                                              minExercise_Val                  = e.data['row._req_MinExercise'];

                                                              minTransferableAmount_Val        = e.data['row._req_MinTransferableAmount'];

                                                              minimumAmount_Val                = e.data['row._req_MinimumAmount'];

                                                              numberOfShares_Val               = e.data['row._req_NumberOfShares'];

                                                              numberReleased_Val               = e.data['row._req_NumberReleased'];

                                                              offeringType_Val                 = e.data['row._req_OfferingType'];

                                                              orderNumber_Val                  = e.data['row._req_OrderNumber'];

                                                              orderType_Val                    = e.data['row._req_OrderType'];

                                                              payingAgent_Val                  = e.data['row._req_PayingAgent'];

                                                              paymentOrShares_Val              = e.data['row._req_PaymentOrShares'];

                                                              productName_Val                  = e.data['row._req_ProductName'];

                                                              qualifier_Val                    = e.data['row._req_Qualifier'];

                                                              quote_Val                        = e.data['row._req_Quote'];

                                                              redemptionModality_Val           = e.data['row._req_RedemptionModality'];

                                                              redemptionTo_Val                 = e.data['row._req_RedemptionTo'];

                                                              redemptionType_Val               = e.data['row._req_RedemptionType'];

                                                              referenceDay_Val                 = e.data['row._req_ReferenceDay'];

                                                              secondCoupon_Val                 = e.data['row._req_SecondCoupon'];

                                                              securitisationType_Val           = e.data['row._req_SecuritisationType'];

                                                              securityType_Val                 = e.data['row._req_SecurityType'];

                                                              startOfExercisePeriod_Val        = e.data['row._req_StartOfExercisePeriod'];

                                                              tefraDBondFrom_Val               = e.data['row._req_TefraDBondFrom'];

                                                              tefraDBondTo_Val                 = e.data['row._req_TefraDBondTo'];

                                                              type_Val                         = e.data['row._req_Type'];

                                                              underlying_Val                   = e.data['row._req_Underlying'];

                                                              valueDate_Val                    = e.data['row._req_ValueDate'];

                                                              wKN_Val                          = e.data['row._req_WKN'];

                                                              xemacParticipant_Val             = e.data['row._req_XemacParticipant'];

                                                              xemacSystemClaimNumber_Val       = e.data['row._req_XemacSystemClaimNumber'];

                                                              _key_Val                         = e.data['row._key'];

                                                              

                                                               issuer_6_Input.val(issuer_6_Val);

                                                               doc_type_Input.val(doc_type_Val);

                                                               applicableLaw_Input.val(applicableLaw_Val);

                                                               automaticExercise_Input.val(automaticExercise_Val);

                                                               cBFAccountNumber_Input.val(cBFAccountNumber_Val);

                                                               commentField_Input.val(commentField_Val);

                                                               coupon_Input.val(coupon_Val);

                                                               couponDenomination_Input.val(couponDenomination_Val);

                                                               currency_Input.val(currency_Val);

                                                               denomination_Input.val(denomination_Val);

                                                               distributionCurrency_Input.val(distributionCurrency_Val);

                                                               emptyField_Input.val(emptyField_Val);

                                                               endOfExercisePeriod_Input.val(endOfExercisePeriod_Val);

                                                               exceptionInterestCalculation_Input.val(exceptionInterestCalculation_Val);

                                                               exerciseAgent_Input.val(exerciseAgent_Val);

                                                               expiry_Input.val(expiry_Val);

                                                               firstCoupon_Input.val(firstCoupon_Val);

                                                               floaterFrom_Input.val(floaterFrom_Val);

                                                               globalNoteNumber_Input.val(globalNoteNumber_Val);

                                                               globalNotesLanguage_Input.val(globalNotesLanguage_Val);

                                                               iSIN_Input.val(iSIN_Val);

                                                               increment_Input.val(increment_Val);

                                                               instrumentType_Input.val(instrumentType_Val);

                                                               interestCycle_Input.val(interestCycle_Val);

                                                               interestPaymentType_Input.val(interestPaymentType_Val);

                                                               interestPeriodFrom_Input.val(interestPeriodFrom_Val);

                                                               interestPeriodTo_Input.val(interestPeriodTo_Val);

                                                               interestRate_Input.val(interestRate_Val);

                                                               issuer_Input.val(issuer_Val);

                                                               issuingAmount_Input.val(issuingAmount_Val);

                                                               lastCoupon_Input.val(lastCoupon_Val);

                                                               launchDate_Input.val(launchDate_Val);

                                                               listing_Input.val(listing_Val);

                                                               maturityDate_Input.val(maturityDate_Val);

                                                               minExercise_Input.val(minExercise_Val);

                                                               minTransferableAmount_Input.val(minTransferableAmount_Val);

                                                               minimumAmount_Input.val(minimumAmount_Val);

                                                               numberOfShares_Input.val(numberOfShares_Val);

                                                               numberReleased_Input.val(numberReleased_Val);

                                                               offeringType_Input.val(offeringType_Val);

                                                               orderNumber_Input.val(orderNumber_Val);

                                                               orderType_Input.val(orderType_Val);

                                                               payingAgent_Input.val(payingAgent_Val);

                                                               paymentOrShares_Input.val(paymentOrShares_Val);

                                                               productName_Input.val(productName_Val);

                                                               qualifier_Input.val(qualifier_Val);

                                                               quote_Input.val(quote_Val);

                                                               redemptionModality_Input.val(redemptionModality_Val);

                                                               redemptionTo_Input.val(redemptionTo_Val);

                                                               redemptionType_Input.val(redemptionType_Val);

                                                               referenceDay_Input.val(referenceDay_Val);

                                                               secondCoupon_Input.val(secondCoupon_Val);

                                                               securitisationType_Input.val(securitisationType_Val);

                                                               securityType_Input.val(securityType_Val);

                                                               startOfExercisePeriod_Input.val(startOfExercisePeriod_Val);

                                                               tefraDBondFrom_Input.val(tefraDBondFrom_Val);

                                                               tefraDBondTo_Input.val(tefraDBondTo_Val);

                                                               type_Input.val(type_Val);

                                                               underlying_Input.val(underlying_Val);

                                                               valueDate_Input.val(valueDate_Val);

                                                               wKN_Input.val(wKN_Val);

                                                               xemacParticipant_Input.val(xemacParticipant_Val);

                                                               xemacSystemClaimNumber_Input.val(xemacSystemClaimNumber_Val);

                                                              _key_Input.val(_key_Val);

                                                              

                                               } else if(e['field'] === 'Delete') {

                                                              

                                                               tokens.set('delete_key_tok', e.data['row._key']);

                                                              

                                               }

 

                    });

               

                               $(document).on('click', '#submitButton', function(e) {

                                               

                                               e.preventDefault();

                                              

                                               if(_key_Input.val() != ''){

                                               

                                                               tokens.set('upd_key_tok', _key_Val);

                                                               tokens.set('upd_Issuer_6_tok' , issuer_6_Input.val());

                                                               tokens.set('upd_doc_type_tok', doc_type_Input.val());

                                                               tokens.set('upd_ApplicableLaw_tok', applicableLaw_Input.val());

                                                               tokens.set('upd_AutomaticExercise_tok', automaticExercise_Input.val());

                                                               tokens.set('upd_CBFAccountNumber_tok', cBFAccountNumber_Input.val());

                                                               tokens.set('upd_CommentField_tok', commentField_Input.val());

                                                               tokens.set('upd_Coupon_tok', coupon_Input.val());

                                                               tokens.set('upd_CouponDenomination_tok', couponDenomination_Input.val());

                                                               tokens.set('upd_Currency_tok', currency_Input.val());

                                                               tokens.set('upd_Denomination_tok', denomination_Input.val());

                                                               tokens.set('upd_DistributionCurrency_tok', distributionCurrency_Input.val());

                                                               tokens.set('upd_EmptyField_tok', emptyField_Input.val());

                                                               tokens.set('upd_EndOfExercisePeriod_tok', endOfExercisePeriod_Input.val());

                                                               tokens.set('upd_ExceptionInterestCalculation_tok', exceptionInterestCalculation_Input.val());

                                                               tokens.set('upd_ExerciseAgent_tok', exerciseAgent_Input.val());

                                                               tokens.set('upd_Expiry_tok', expiry_Input.val());

                                                               tokens.set('upd_FirstCoupon_tok', firstCoupon_Input.val());

                                                               tokens.set('upd_FloaterFrom_tok', floaterFrom_Input.val());

                                                               tokens.set('upd_GlobalNoteNumber_tok', globalNoteNumber_Input.val());

                                                               tokens.set('upd_GlobalNotesLanguage_tok', globalNotesLanguage_Input.val());

                                                               tokens.set('upd_ISIN_tok', iSIN_Input.val());

                                                               tokens.set('upd_Increment_tok', increment_Input.val());

                                                               tokens.set('upd_InstrumentType_tok', instrumentType_Input.val());

                                                               tokens.set('upd_InterestCycle_tok', interestCycle_Input.val());

                                                               tokens.set('upd_InterestPaymentType_tok', interestPaymentType_Input.val());

                                                               tokens.set('upd_InterestPeriodFrom_tok', interestPeriodFrom_Input.val());

                                                               tokens.set('upd_InterestPeriodTo_tok', interestPeriodTo_Input.val());

                                                               tokens.set('upd_InterestRate_tok', interestRate_Input.val());

                                                               tokens.set('upd_Issuer_tok', issuer_Input.val());

                                                               tokens.set('upd_IssuingAmount_tok', issuingAmount_Input.val());

                                                               tokens.set('upd_LastCoupon_tok', lastCoupon_Input.val());

                                                               tokens.set('upd_LaunchDate_tok', launchDate_Input.val());

                                                               tokens.set('upd_Listing_tok', listing_Input.val());

                                                               tokens.set('upd_MaturityDate_tok', maturityDate_Input.val());

                                                               tokens.set('upd_MinExercise_tok', minExercise_Input.val());

                                                               tokens.set('upd_MinTransferableAmount_tok', minTransferableAmount_Input.val());

                                                               tokens.set('upd_MinimumAmount_tok', minimumAmount_Input.val());

                                                               tokens.set('upd_NumberOfShares_tok', numberOfShares_Input.val());

                                                               tokens.set('upd_NumberReleased_tok', numberReleased_Input.val());

                                                               tokens.set('upd_OfferingType_tok', offeringType_Input.val());

                                                               tokens.set('upd_OrderNumber_tok', orderNumber_Input.val());

                                                               tokens.set('upd_OrderType_tok', orderType_Input.val());

                                                               tokens.set('upd_PayingAgent_tok', payingAgent_Input.val());

                                                               tokens.set('upd_PaymentOrShares_tok', paymentOrShares_Input.val());

                                                               tokens.set('upd_ProductName_tok', productName_Input.val());

                                                               tokens.set('upd_Qualifier_tok', qualifier_Input.val());

                                                               tokens.set('upd_Quote_tok', quote_Input.val());

                                                               tokens.set('upd_RedemptionModality_tok', redemptionModality_Input.val());

                                                               tokens.set('upd_RedemptionTo_tok', redemptionTo_Input.val());

                                                               tokens.set('upd_RedemptionType_tok', redemptionType_Input.val());

                                                               tokens.set('upd_ReferenceDay_tok', referenceDay_Input.val());

                                                               tokens.set('upd_SecondCoupon_tok', secondCoupon_Input.val());

                                                               tokens.set('upd_SecuritisationType_tok', securitisationType_Input.val());

                                                               tokens.set('upd_SecurityType_tok', securityType_Input.val());

                                                               tokens.set('upd_StartOfExercisePeriod_tok', startOfExercisePeriod_Input.val());

                                                               tokens.set('upd_TefraDBondFrom_tok', tefraDBondFrom_Input.val());

                                                               tokens.set('upd_TefraDBondTo_tok', tefraDBondTo_Input.val());

                                                               tokens.set('upd_Type_tok', type_Input.val());

                                                               tokens.set('upd_Underlying_tok', underlying_Input.val());

                                                               tokens.set('upd_ValueDate_tok', valueDate_Input.val());

                                                               tokens.set('upd_WKN_tok', wKN_Input.val());

                                                               tokens.set('upd_XemacParticipant_tok', xemacParticipant_Input.val());

                                                               tokens.set('upd_XemacSystemClaimNumber_tok', xemacSystemClaimNumber_Input.val());

                                               } else {

                                                               tokens.set('crt_key_tok', 'true');

                                                               tokens.set('crt_Issuer_6_tok' , issuer_6_Input.val());

                                                               tokens.set('crt_doc_type_tok', doc_type_Input.val());

                                                               tokens.set('crt_ApplicableLaw_tok', applicableLaw_Input.val());

                                                               tokens.set('crt_AutomaticExercise_tok', automaticExercise_Input.val());

                                                               tokens.set('crt_CBFAccountNumber_tok', cBFAccountNumber_Input.val());

                                                               tokens.set('crt_CommentField_tok', commentField_Input.val());

                                                               tokens.set('crt_Coupon_tok', coupon_Input.val());

                                                               tokens.set('crt_CouponDenomination_tok', couponDenomination_Input.val());

                                                               tokens.set('crt_Currency_tok', currency_Input.val());

                                                               tokens.set('crt_Denomination_tok', denomination_Input.val());

                                                               tokens.set('crt_DistributionCurrency_tok', distributionCurrency_Input.val());

                                                               tokens.set('crt_EmptyField_tok', emptyField_Input.val());

                                                               tokens.set('crt_EndOfExercisePeriod_tok', endOfExercisePeriod_Input.val());

                                                               tokens.set('crt_ExceptionInterestCalculation_tok', exceptionInterestCalculation_Input.val());

                                                               tokens.set('crt_ExerciseAgent_tok', exerciseAgent_Input.val());

                                                               tokens.set('crt_Expiry_tok', expiry_Input.val());

                                                               tokens.set('crt_FirstCoupon_tok', firstCoupon_Input.val());

                                                               tokens.set('crt_FloaterFrom_tok', floaterFrom_Input.val());

                                                               tokens.set('crt_GlobalNoteNumber_tok', globalNoteNumber_Input.val());

                                                               tokens.set('crt_GlobalNotesLanguage_tok', globalNotesLanguage_Input.val());

                                                               tokens.set('crt_ISIN_tok', iSIN_Input.val());

                                                               tokens.set('crt_Increment_tok', increment_Input.val());

                                                               tokens.set('crt_InstrumentType_tok', instrumentType_Input.val());

                                                               tokens.set('crt_InterestCycle_tok', interestCycle_Input.val());

                                                               tokens.set('crt_InterestPaymentType_tok', interestPaymentType_Input.val());

                                                               tokens.set('crt_InterestPeriodFrom_tok', interestPeriodFrom_Input.val());

                                                               tokens.set('crt_InterestPeriodTo_tok', interestPeriodTo_Input.val());

                                                               tokens.set('crt_InterestRate_tok', interestRate_Input.val());

                                                               tokens.set('crt_Issuer_tok', issuer_Input.val());

                                                               tokens.set('crt_IssuingAmount_tok', issuingAmount_Input.val());

                                                               tokens.set('crt_LastCoupon_tok', lastCoupon_Input.val());

                                                               tokens.set('crt_LaunchDate_tok', launchDate_Input.val());

                                                               tokens.set('crt_Listing_tok', listing_Input.val());

                                                               tokens.set('crt_MaturityDate_tok', maturityDate_Input.val());

                                                               tokens.set('crt_MinExercise_tok', minExercise_Input.val());

                                                               tokens.set('crt_MinTransferableAmount_tok', minTransferableAmount_Input.val());

                                                               tokens.set('crt_MinimumAmount_tok', minimumAmount_Input.val());

                                                               tokens.set('crt_NumberOfShares_tok', numberOfShares_Input.val());

                                                               tokens.set('crt_NumberReleased_tok', numberReleased_Input.val());

                                                               tokens.set('crt_OfferingType_tok', offeringType_Input.val());

                                                               tokens.set('crt_OrderNumber_tok', orderNumber_Input.val());

                                                               tokens.set('crt_OrderType_tok', orderType_Input.val());

                                                               tokens.set('crt_PayingAgent_tok', payingAgent_Input.val());

                                                               tokens.set('crt_PaymentOrShares_tok', paymentOrShares_Input.val());

                                                               tokens.set('crt_ProductName_tok', productName_Input.val());

                                                               tokens.set('crt_Qualifier_tok', qualifier_Input.val());

                                                               tokens.set('crt_Quote_tok', quote_Input.val());

                                                               tokens.set('crt_RedemptionModality_tok', redemptionModality_Input.val());

                                                               tokens.set('crt_RedemptionTo_tok', redemptionTo_Input.val());

                                                               tokens.set('crt_RedemptionType_tok', redemptionType_Input.val());

                                                               tokens.set('crt_ReferenceDay_tok', referenceDay_Input.val());

                                                               tokens.set('crt_SecondCoupon_tok', secondCoupon_Input.val());

                                                               tokens.set('crt_SecuritisationType_tok', securitisationType_Input.val());

                                                               tokens.set('crt_SecurityType_tok', securityType_Input.val());

                                                               tokens.set('crt_StartOfExercisePeriod_tok', startOfExercisePeriod_Input.val());

                                                               tokens.set('crt_TefraDBondFrom_tok', tefraDBondFrom_Input.val());

                                                               tokens.set('crt_TefraDBondTo_tok', tefraDBondTo_Input.val());

                                                               tokens.set('crt_Type_tok', type_Input.val());

                                                               tokens.set('crt_Underlying_tok', underlying_Input.val());

                                                               tokens.set('crt_ValueDate_tok', valueDate_Input.val());

                                                               tokens.set('crt_WKN_tok', wKN_Input.val());

                                                               tokens.set('crt_XemacParticipant_tok', xemacParticipant_Input.val());

                                                               tokens.set('crt_XemacSystemClaimNumber_tok', xemacSystemClaimNumber_Input.val());

                                               }

                                               debugger;

                              

                               });

                              

                                updateSearch.on('search:done', function() {

 

                                    requiredAttributeSearch.startSearch();

                                    $('form *').filter(':input').each(function(){

                                        $(this).val('');

                                    });

                               });

                              

                                createSearch.on('search:done', function() {

 

                                    requiredAttributeSearch.startSearch();

                                    $('form *').filter(':input').each(function(){

                                        $(this).val('');

                                    });

                               });

                              

                                deleteSearch.on('search:done', function() {

 

                                    requiredAttributeSearch.startSearch();

                                    $('form *').filter(':input').each(function(){

                                        $(this).val('');

                                    });

 

                                    tokens.unset('delete_key_tok');

                               });

               

                               $('form *').filter(':input').each(function(){

                                  var value = $(this).val();

                                  console.log(value);

                               });

                              

                               

 

               

 

});

