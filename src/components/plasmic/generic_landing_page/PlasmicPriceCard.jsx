// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: bTYggZwLLoYhfF6m8u8xN3
// Component: VQEWrU3L4_fNDT
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Divider from "../../Divider"; // plasmic-import: e7Aw_P7qtsLoDX/component
import ValueProp from "../../ValueProp"; // plasmic-import: 0YfVpkf-QfLPW1/component
import Button from "../../Button"; // plasmic-import: 5ueeJX10Q2X2sQ/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_generic_landing_page.module.css"; // plasmic-import: bTYggZwLLoYhfF6m8u8xN3/projectcss
import sty from "./PlasmicPriceCard.module.css"; // plasmic-import: VQEWrU3L4_fNDT/css
import CheckIcon from "./icons/PlasmicIcon__Check"; // plasmic-import: hQGxCAJ9sNcxE3/icon

export const PlasmicPriceCard__VariantProps = new Array("primary", "borders");

export const PlasmicPriceCard__ArgProps = new Array(
  "label",
  "dollars",
  "description",
  "action"
);

export const defaultPriceCard__Args = {};

function PlasmicPriceCard__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultPriceCard__Args, props.args);
  const $props = args;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        {
          [sty.rootborders_flatLeft]: hasVariant(
            variants,
            "borders",
            "flatLeft"
          ),

          [sty.rootborders_flatRight]: hasVariant(
            variants,
            "borders",
            "flatRight"
          ),

          [sty.rootprimary]: hasVariant(variants, "primary", "primary")
        }
      )}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__t4CyM)}
      >
        <div className={classNames(projectcss.all, sty.freeBox__dqlkj)}>
          <div className={classNames(projectcss.all, sty.freeBox__aJAcJ)}>
            {p.renderPlasmicSlot({
              defaultContents: "Starter",
              value: args.label,
              className: classNames(sty.slotTargetLabel)
            })}
          </div>
        </div>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__oJjRe)}
        >
          <div className={classNames(projectcss.all, sty.freeBox__nkddX)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__tRgwM
              )}
            >
              {"$"}
            </div>

            <div className={classNames(projectcss.all, sty.freeBox__xtuVk)}>
              {p.renderPlasmicSlot({
                defaultContents: "8",
                value: args.dollars,
                className: classNames(sty.slotTargetDollars)
              })}
            </div>
          </div>

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__bsrsG
            )}
          >
            {"/month"}
          </div>
        </p.Stack>
      </p.Stack>

      <Divider
        data-plasmic-name={"divider"}
        data-plasmic-override={overrides.divider}
        className={classNames("__wab_instance", sty.divider)}
      />

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__c1Ykp)}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__eouJ)}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <React.Fragment>
                <ValueProp
                  className={classNames("__wab_instance", sty.valueProp__wQc)}
                  description={
                    "Vestibulum mollis odio dictum ultrices facilisis molestie vestibulum"
                  }
                  icon={
                    <CheckIcon
                      className={classNames(projectcss.all, sty.svg__glVD)}
                      role={"img"}
                    />
                  }
                />

                <ValueProp
                  className={classNames("__wab_instance", sty.valueProp__oxvV7)}
                  description={"Mus consequat a justo"}
                  icon={
                    <CheckIcon
                      className={classNames(projectcss.all, sty.svg__b7A8Y)}
                      role={"img"}
                    />
                  }
                />
              </React.Fragment>
            ),

            value: args.description
          })}
        </p.Stack>

        <Button
          data-plasmic-name={"button"}
          data-plasmic-override={overrides.button}
          color={hasVariant(variants, "primary", "primary") ? "green" : "white"}
          extraSmallShadow={true}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__lQ9Pa
                )}
              >
                {"Buy starter"}
              </div>
            ),

            value: args.action
          })}
        </Button>
      </p.Stack>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "divider", "button"],
  divider: ["divider"],
  button: ["button"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicPriceCard__ArgProps,
      internalVariantPropNames: PlasmicPriceCard__VariantProps
    });

    return PlasmicPriceCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPriceCard";
  } else {
    func.displayName = `PlasmicPriceCard.${nodeName}`;
  }
  return func;
}

export const PlasmicPriceCard = Object.assign(
  // Top-level PlasmicPriceCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    divider: makeNodeComponent("divider"),
    button: makeNodeComponent("button"),
    // Metadata about props expected for PlasmicPriceCard
    internalVariantProps: PlasmicPriceCard__VariantProps,
    internalArgProps: PlasmicPriceCard__ArgProps
  }
);

export default PlasmicPriceCard;
/* prettier-ignore-end */
